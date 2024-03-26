import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, collection, query, where, documentId, writeBatch, addDoc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async (userData) => {
        try {
            setLoading(true)
            const objOrder = {
                buyer: {
                    name: 'Sebastian Zuviria',
                    email: 'contact@sebaz.io',
                    phone: '123456789'
                },
                items: cart,
                total
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
    
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            // getDocs(productsCollection)
            //     .then(querySnapshot => console.log(querySnapshot.docs))
            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot
    
            docs.forEach(doc => {
                const data = doc.data()
                const stockDb = data.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...data})
                }
            })
    
            if(outOfStock.length === 0) {
                batch.commit()
    
                const orderCollection = collection(db, 'orders')
                const { id } = await addDoc(orderCollection, objOrder)
                
                clearCart()
                setOrderId(id)
            } else {
                console.error('hay productos que no tienen stock disponible')
            }
        } catch (error) {
            console.error('Hubo un error en la generacion de la orden')
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Su orden esta siendo generada...</h1>
    }

    if(orderId) {
        return <h1>El id de su orden es: {orderId}</h1>
    }

    return  (
        <div>
            <h1>Checkout</h1>
            <h3>crear formulario para el ingreso de datos</h3>
            <button onClick={createOrder}>Generar orden de compras</button>
        </div>
    )
}

export default Checkout