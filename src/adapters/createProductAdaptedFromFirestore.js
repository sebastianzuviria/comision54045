export const createProductAdaptedFromFirestore = (doc) => {
    console.log(doc)
    const data = doc.data()
    
    return {
        id: doc.id,
        name: data.nombre,
        category: data.categoria,
        img: data.imagen, 
        price: data.precio,
        stock: data.stock,
        description: data.descripcion
    }
}