import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
      <Navbar /> 
      <ItemListContainer greeting={'Bienvenidos'}/>
    </>
  )
}

export default App