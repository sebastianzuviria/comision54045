import { useState, useEffect } from "react"

const MercadoLibre = () => {
    const [items, setItems] = useState([])
    const [input, setInput] = useState('')

    // useEffect(() => {
    //     fetch('https://api.mercadolibre.com/sites/MLA/search?q=celulares')
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(json => setItems(json.results))
    //         .catch(error => console.error(error))
    // }, [])

    const handleOnSubmit = (e) => {
        e.preventDefault()

        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
            .then(response => {
                return response.json()
            })
            .then(json => setItems(json.results))
            .catch(error => console.error(error))
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>Mercado Libre</h1>
            {
                items.length === 0 ? (
                    <form onSubmit={handleOnSubmit}>
                        <input value={input} onChange={(e) => setInput(e.target.value)}/>
                        <button>Search</button>
                    </form>
                ) : (
                    <section>
                    {
                        items.map(item => {
                            return (
                                <article key={item.id}>
                                    <h2>{item.title}</h2>
                                    <img src={item.thumbnail}/>
                                    <h3>Precio: ${item.price}</h3>
                                </article>
                            )
                        })
                    }
                    </section>
                )
            }
        </div>
    )
}

export default MercadoLibre