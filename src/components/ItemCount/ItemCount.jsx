import { useState } from "react"
import { useCount } from "../../hooks/useCount"

const ItemCount = ({initialValue, className}) => {
    const { count, decrement, increment } = useCount(initialValue)

    return (
        <div className={className}>
            <h1>{count}</h1>
            <button onClick={decrement}>decrementar</button>
            <button onClick={increment}>incrementar</button>
        </div>
    )
}

export default ItemCount
