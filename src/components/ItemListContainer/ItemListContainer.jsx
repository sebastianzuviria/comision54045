import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState()

    const { categoryId } = useParams()

    useEffect(() => {

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(result => {
                setProducts(result)
            })
            .catch(error => {
                console.log(error)
            })

        // if(!categoryId) {
        //     getProducts()
        //         .then(result => {
        //             setProducts(result)
        //         })
        //         .catch(error => {
        //             console.log(error)
        //         })
        // } else {
        //     getProductsByCategory(categoryId)
        //         .then(result => {
        //             setProducts(result)
        //         })
        //         .catch(error => {
        //             console.log(error)
        //         })
        // }
        
    }, [categoryId])

    return (
        <div style={{ background: 'orange'}} onClick={() => console.log('hice click en itemlistcontainer')}>
            <h1>{ greeting }</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer