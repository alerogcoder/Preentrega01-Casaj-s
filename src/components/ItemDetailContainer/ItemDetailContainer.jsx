import { getProducts } from "../../data/data.js"
import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import "./itemdetail.css"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const { idProduct } = useParams();

    useEffect ( ()=> {
        getProducts()
        .then( (data)=> {
            const findProduct = data.find( 
              (product)=> product.id === idProduct);
            setProduct(findProduct)
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
          setProduct(null); 
      });
    }, [idProduct]);
    if (!product) {
      return <p id="loadingproduct">Cargando producto...</p>; // Puedes mostrar un mensaje mientras se carga el producto
  }

  return (
    <ItemDetail product={product} />
  )
}

export default ItemDetailContainer
