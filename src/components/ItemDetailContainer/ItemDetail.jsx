import { useState, useContext } from "react";
import ItemCount from "../Contadores/ItemCount";
import { CartContext } from "../../context/CartContext" 
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const [showItemCount, setShowItemCount] = useState(true)

  const { addProductInCart } = useContext(CartContext)

  const addProduct = (count) => {
    const productCart = { ...product, quantity: count }
    
    addProductInCart(productCart)
    setShowItemCount(false)
  }

  const [currentImage, setCurrentImage] = useState(product.image[0]);
  const images = product.image.filter((image) => image !== currentImage);
  return (
    <div className="itemCard">
      <div className="secondary-image">
        {images.map((image) => (
          <img src={image} key={image} onClick={() => setCurrentImage(image)} alt={product.name} />
        ))}
      </div>
      <img src={currentImage} alt={product.name} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="itemPrice">
          <strong>Precio:</strong> ${product.price}
        </p>
        <p className="itemCant">
          <strong>Cantidad en el pack:</strong> {product.quantity}
        </p>
        {
          showItemCount === true ? (
            <ItemCount stock={product.stock} addProduct={addProduct}/>
          ) : (
            <>
            <ItemCount stock={product.stock} addProduct={addProduct}/>
            <Link className="botonagregar" to="/cart">Terminar mi compra</Link>
            </>
          )
        }
      </div>
    </div>
  );
};

export default ItemDetail;
