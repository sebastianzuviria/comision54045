import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartView = () => {
    const { cart } = useContext(CartContext)

    return (
        <div>
            <h1>Cart</h1>
            <section>
            {
                cart.map(prod => {
                    return (
                        <article key={prod.id}>
                            <h2>{prod.name}</h2>
                        </article>
                    )
                })
            }
            </section>
            <Link to='/checkout'>Checkout</Link>
        </div>
    )
}

export default CartView