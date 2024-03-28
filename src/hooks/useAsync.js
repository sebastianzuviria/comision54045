import { useState, useEffect } from "react"

export const useAsync = (asyncFunction, dependencies = []) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        console.log(asyncFunction())
        asyncFunction()
            .then(data => {
                setData(data)
            })
            .catch(error => {
                setError(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, dependencies)

    return {
        data,
        loading,
        error
    }
}