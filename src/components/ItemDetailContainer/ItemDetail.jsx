import { useState } from "react";
import ContadorEventListener from "../Contadores/ContadorEventListener";

const ItemDetail = ({ product }) => {
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
          <strong>Precio:</strong> {product.price}€
        </p>
        <p className="itemCant">
          <strong>Cantidad en el pack:</strong> {product.quantity}
        </p>
        <ContadorEventListener stock={product.stock} />
      <button className="addButton">Agregar</button>
      </div>
    </div>
  );
};

export default ItemDetail;
