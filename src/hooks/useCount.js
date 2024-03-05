import { useState } from "react"

export const useCount = (initialValue = 0) => {
    const [count, setCount] = useState(initialValue)

    const decrement = () => {
        setCount(prev => prev - 1)
    }

    const increment = () => {
        setCount(prev => prev + 1)
    }

    return {
        count,
        decrement,
        increment
    }
}