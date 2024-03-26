import classes from './Navbar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const Navbar = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const categoriesCollection = query(collection(db, 'categories'), orderBy('order', 'asc'))
        
        getDocs(categoriesCollection)
            .then(querySnapshot => {
                const categoriesAdapted = querySnapshot.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data}
                })
                setCategories(categoriesAdapted)
            })
            .catch(error => {
                console.error('error')
            })
    }, [])

    return (
        <header className={classes.header}>
           <h2 onClick={() => navigate('/')} style={{ color: 'red', fontSize: 10, cursor: 'pointer'}}>Ecommerce 54045</h2> 
           <nav>
                {
                    categories.map(cat => {
                        return <Link key={cat.id} to={`/category/${cat.slug}`}>{cat.name}</Link>
                    })
                }
                {/* <Link to='/category/celular'>Celulares</Link>
                <Link to='/category/tablet'>Tablets</Link>
                <Link to='/category/notebook'>Notebooks</Link> */}
           </nav>
           <CartWidget />
        </header>
    )
}

export default Navbar