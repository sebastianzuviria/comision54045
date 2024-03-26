import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import cart from './assets/cart.svg'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <Link to={'/cart'}>
            <img src={cart}/>
            { totalQuantity }
        </Link>
    )
}

export default CartWidget