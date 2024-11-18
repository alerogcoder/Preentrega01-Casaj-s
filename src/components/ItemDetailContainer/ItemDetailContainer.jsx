import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail.jsx"
import { useParams } from "react-router-dom"
import "./itemdetail.css"
import ItemDetailLoading from "./ItemDetailLoading.jsx"
import { getDoc, doc } from "firebase/firestore"
import db from "../../db/db.js"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const { idProduct } = useParams()

  const getProductById = () => {
    const docRef = doc(db, "products", idProduct)
    getDoc(docRef)
      .then((dataDb) => {
        const productDb = { id: dataDb.id, ...dataDb.data() }
        setProduct(productDb);
      })
      .finally(() => setLoading(false))
  };

  useEffect(() => {
    getProductById()
  }, [idProduct])

  if (loading) {
    return <ItemDetailLoading />
  }

  return <ItemDetail product={product} />
};

export default ItemDetailContainer;

