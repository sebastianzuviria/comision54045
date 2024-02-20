import cart from './assets/cart.svg'

const CartWidget = () => {
    return (
        <button>
            <img src={cart}/>
            0
        </button>
    )
}

export default CartWidget