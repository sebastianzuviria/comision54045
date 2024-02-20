import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
// import Button from "./components/Button/Button"
// import ItemCount from "./components/ItemCount/ItemCount"


function App() {
  console.log('render app')
  return (
    <>
    <Navbar />
    <ItemListContainer greeting='Bienvenidos'/>
      {/* <ItemCount initialValue={1} min={0} max={10}/>
      <ItemCount initialValue={10}  min={5} max={15}/>
      <ItemCount initialValue={100}  min={95} max={105}/> */}
      {/* <Navbar />
      <h1>Ecommerce</h1>
      <a>Prueba</a> */}
      {/* <Button text='Home' textColor='red' className='btn btn-primary' callback={() => console.log('hice click en Home')}/>
      <Button text='Contact' textColor='blue' className='btn btn-secundary' callback={() => console.log('hice click en Contact')}/>
      <Button text='About' textColor='white'  className='btn btn-danger' callback={() => console.log('hice click en About')}/> */}
    </>
  )
}

export default App
