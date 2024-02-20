import React from 'react'
import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    console.log(classes)
    return (
        <header className={classes.header}>
           <h4 style={{ color: 'red', fontSize: 10}}>Ecommerce 54045</h4> 
           <nav>
                <a className='btn btn-primary'>Celulares</a>
                <a>Tablets</a>
                <a>Notebooks</a>
           </nav>
           <CartWidget />
        </header>
    )
    // return React.createElement('header', { className: classes.header}, [
    //         React.createElement('h4', { style: { color: 'red', fontSize: 10}}),
    //         React.createElement('nav', {}, [
    //             React.createElement('a', { className: 'btn btn-primary'}, 'Celulares')
    //         ])
    //     ])
}

export default Navbar