import { useState } from "react"
import ItemCount from "./components/ItemCount/ItemCount"
import ContadorDeVueltas from "./components/ContadorDeVueltas/ContadorDeVueltas"

// const Layout = (props) => {
//   console.log(props)
//   return (
//     <div>
//       <h1 style={{ color: props.color}}>{props.title}</h1>
//       {props.children}
//     </div>
//   )
// }

// function App() {
//   return (
//     <>
//       <Layout title={'Primera pagina'} color='red'>
//         <p style={ {color: 'red'} }>Este seria el texto de la primera pagina</p>
//         <button>Boton</button>
//         <p>Este seria el texto de la primera pagina</p>
//       </Layout>
//       <Layout title={'Segunda pagina'} color='red'>
//         <input />
//       </Layout>
//     </>
//   )
// }

// export default App

// const App = () => {
//   const [show, setShow] = useState(false)

//   return (
//     <>
//       <button onClick={() => setShow(prev => !prev)}>{show ? 'ocultar' : 'mostrar'}</button>
//       {show ? <ItemCount initialValue={1}/> : null }
//     </>
//   )
// }

// export default App

const App = () => {
  return (
    <>
      <ContadorDeVueltas />
    </>
  )
}

export default App