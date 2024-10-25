import { getProducts } from "../../data/data.js"
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import "./itemdetail.css"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { idProduct } = useParams()

    useEffect ( ()=> {
        getProducts()
        .then( (data)=> {
            const findProduct = data.find( (product)=> product.id === idProduct)
            setProduct(findProduct)
        })
    }, [idProduct])

  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer
