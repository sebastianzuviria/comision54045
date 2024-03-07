import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()

    return (
        <header className={classes.header}>
           <h2 onClick={() => navigate('/')} style={{ color: 'red', fontSize: 10, cursor: 'pointer'}}>Ecommerce 54045</h2> 
           <nav>
                <Link to='/category/celular'>Celulares</Link>
                <Link to='/category/tablet'>Tablets</Link>
                <Link to='/category/notebook'>Notebooks</Link>
           </nav>
           <CartWidget />
        </header>
    )
}

export default Navbar