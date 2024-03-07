import { Link } from "react-router-dom"

const Item = ({ id, name, img, price}) => {
    return (
        <div >
            <h2>{name}</h2>
            <img src={img} style={{ width: 100}}/>
            <h3>Precio: ${price}</h3>
            <Link to={`/item/${id}`}>ver detalle</Link>
        </div>
    )
}

export default Item