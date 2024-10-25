
const ItemDetail = ( {product} ) => {
  return (
    <div className="itemCard">
      <img src={product.image} alt=""/>
      <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className="itemPrice"><strong>Precio:</strong> {product.price}€</p>
      <p className="itemCant"><strong>Cantidad en el pack:</strong> {product.quantity}</p></div>
    </div>
  )
}

export default ItemDetail
