import "./itemlistcontainer.css"
import ItemList from "./ItemList.jsx"
import { getProducts } from "../../data/data.js"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
const [products, setProducts] = useState([])

const { idCategory } = useParams()

useEffect( ()=> {
    getProducts()
    .then( (data)=> {
        if(idCategory) {
            const filterProducts = data.filter ( (product)=> product.category === idCategory)
            setProducts(filterProducts)
        }else {
            setProducts(data)
        }
    })
    .catch( (error)=> {
        console.error(error)
    })
    .finally ( ()=> {
        console.log("finalizo la promesa")
    })
}, [idCategory])



    return (
        <ItemList products={products} />
    )
}

export default ItemListContainer
