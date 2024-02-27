const Item = ({ id, name, img, price}) => {
    return (
        <div >
            <h2>{name}</h2>
            <img src={img} style={{ width: 100}}/>
            <h3>Precio: ${price}</h3>
        </div>
    )
}

export default Item

// const Item = (props) => {
//     return (
//         <div >
//             <h2>{props.product.name}</h2>
//             <img src={props.product.img} style={{ width: 100}}/>
//             <h3>Precio: ${props.product.price}</h3>
//         </div>
//     )
// }

// export default Item