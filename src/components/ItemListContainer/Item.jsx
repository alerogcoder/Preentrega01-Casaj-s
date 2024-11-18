import { Link } from "react-router-dom"


const Item = ({product}) => {
    return (
    <Link to={"/detail/" + product.id} className="item">
    <img src={product.image[0]} alt="" />
        <h2>{product.name}</h2>
        <p>Precio: {product.price}€</p>
    </Link>
    )
}

export default Item
