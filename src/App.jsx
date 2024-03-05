import MercadoLibre from "./components/MercadoLibre/MercadoLibre"
import ItemCount from "./components/ItemCount/ItemCount"
import FormWithValidationHOC from "./components/FormWithValidationHOC/FormWithValidationHOC"
import TaskFilterRenderProps from "./components/TasksFilterRenderProps/TaskFilterRenderProps"

const App = () => {
  return (
    <>
      {/* <ItemCount initialValue={15} className={''}/> */}
      {/* <ItemCount initialValue={100} className={''}/> */}
      {/* <FormWithValidationHOC /> */}
      <TaskFilterRenderProps />
    </>
  )
}

export default App