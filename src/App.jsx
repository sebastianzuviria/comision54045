import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'


const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'}/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de productos filtrados'}/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            {/* <Route path='/cart' element={<Cart/>}/> */}
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App