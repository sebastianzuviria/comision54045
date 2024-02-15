import classes from './Navbar.module.css'

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
        </header>
    )
}

export default Navbar