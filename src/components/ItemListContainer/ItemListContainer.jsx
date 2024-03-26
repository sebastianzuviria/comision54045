import { useState, useEffect, memo } from "react"
// import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useNotification } from "../../notification/hooks/useNotification"

import { getDocs, collection, query, where, orderBy} from 'firebase/firestore'

import { db } from "../../services/firebase/firebaseConfig"

const ItemListMemoized = memo(ItemList)

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState()
    const [render, setRender] = useState(false)

    const { categoryId } = useParams()

    const { showNotification } = useNotification()

    useEffect(() => {
        setTimeout(() => {
            setRender(prev => !prev)
        }, 2000)
    }, [])

    useEffect(() => {

        const productsCollection = categoryId ? (
            query(collection(db, 'products'), where('category', '==', categoryId))
        ) : (
            query(collection(db, 'products'), orderBy('name', 'desc'))
        )

        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data()

                    return { id: doc.id, ...data}
                })

                setProducts(productsAdapted)
            })
            .catch(() => {
                showNotification('error', 'Hubo un error cargado los productos')
            })        
    }, [categoryId])

    return (
        <div style={{ background: 'orange'}} onClick={() => console.log('hice click en itemlistcontainer')}>
            <h1>{ greeting }</h1>
            <ItemListMemoized products={products}/>
        </div>
    )
}

export default ItemListContainer