import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            {
                products?.map((product) => {
                    // return <Item key={product.id} id={product.id} name={product.name} img={product.img} price={product.price}/>
                    return <Item key={product.id} {...product}/>
                    // return <Item key={product.id} product={product}/>
                })
            }
        </div>
    )
}

export default ItemList