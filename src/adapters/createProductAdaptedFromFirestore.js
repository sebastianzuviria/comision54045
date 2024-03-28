export const createProductAdaptedFromFirestore = (doc) => {
    const data = doc.data()
    
    return {
        id: doc.id,
        name: data.title,
        category: data.category,
        img: data.img, 
        price: data.price,
        stock: data.stock,
        description: data.description
    }
}