import { useState, useEffect } from "react"
// import { getProductById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/firebaseConfig"
import { useNotification } from "../../notification/hooks/useNotification"
import { useAsync } from "../../hooks/useAsync"
import { getProductById } from "../../services/firebase/firestore/products"


const ItemDetailContainer = () => {
    // const [product, setProduct] = useState(null)

   

    // const { showNotification } = useNotification()

    // useEffect(() => {
    //     const productDoc = doc(db, 'products', itemId)

    //     getDoc(productDoc)
    //         .then(queryDocumentSnapshot => {
    //             const data = queryDocumentSnapshot.data()
    //             const productAdapted = { id: queryDocumentSnapshot.id, ...data}

    //             setProduct(productAdapted)
    //         })
    //         .catch()

    //     // getProductById(itemId)
    //     //     .then(response => {
    //     //         setProduct(response)
    //     //     })
    // }, [itemId])

    const { itemId } = useParams()

    const asyncFunction = () => getProductById(itemId)

    const { data: product, loading, error} = useAsync(asyncFunction, [itemId])

    if(loading) {
        return <h1>Se esta cargando el producto...</h1>
    }

    if(error) {
        return <h1>Hubo un error obteniendo el producto.</h1>
    }
    
    return (
        <div style={{ background: 'pink'}}>
            <h1>Detalle de producto</h1>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer