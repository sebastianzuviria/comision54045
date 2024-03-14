import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import cart from './assets/cart.svg'

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (
        <button>
            <img src={cart}/>
            { totalQuantity }
        </button>
    )
}

export default CartWidget