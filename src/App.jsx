import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { NotificationProvider } from './notification/NotificationsService'
import CartView from './components/Cartview/CartView'
import Checkout from './components/Checkout/Checkout'
// import { useEffect } from 'react'
// import { addDoc, collection } from 'firebase/firestore'
// import { db } from './services/firebase/firebaseConfig'

const App = () => {

  // useEffect(() => {
  //   const products = [
  //       { 
  //           name: 'iphone 12', 
  //           price: 1000, 
  //           category: 'celular', 
  //           img:'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png', 
  //           stock: 25, 
  //           description:'Descripcion de Iphone 12'
  //       },
  //       { name: 'samsung s21', price: 800, category: 'celular', img:'https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803', stock: 16, description:'Descripcion de Samsung s21'},
  //       { name: 'Ipad 8va generacion', price: 1200, category: 'tablet', img:'https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw', stock: 0, description:'Descripcion de Ipad'}
  //   ]
  
  //   const productsCollection = collection(db, 'products')
    
  //   products.forEach(async prod => {
  //       console.log('addDoc')
  //       await addDoc(productsCollection, prod)
  //   })
  // }, [])

  return (
    <>
      <BrowserRouter>
        <NotificationProvider>
          <CartProvider>
              <Navbar />
              <Routes>
                <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados'}/>}/>
                <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<CartView/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
              </Routes>
          </CartProvider>
        </NotificationProvider>
      </BrowserRouter>
    </>
  )
}

export default App