import { useState, useEffect } from "react"

const ItemCount = (props) => {
    const [count, setCount] = useState(props.initialValue)
    
    useEffect(() => {
        console.log('accion useEffect')
        document.title = 'Count: ' + count

        return () => {
            console.log('limpieza useEffect')
            document.title = 'Vite + React'
        }
    }, [count])
    
    console.log('render count')
    const decrement = () => {

        setCount(count => count - 1)
    }
    
    const increment = () => {
        // if(count < props.max) {
            setCount(prev => prev + 1)
        // }
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={decrement}>Incrementar 1</button>
            <button onClick={increment}>Incrementar 2</button>
        </div>
    )
}

export default ItemCount