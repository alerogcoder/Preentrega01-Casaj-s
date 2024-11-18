import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartEmpty from "./CartEmpty"
import "./cart.css"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)

    if(cart.length === 0){
        return(
            <CartEmpty />
        )

    }

    return (
    <div>
        <h2 className="listacategoria">Productos en el carrito</h2>
        <div className="tablacarrito">
            <span></span>
            <span>inventario</span>
            <span>cantidad</span>
            <span>precio c/u</span>
            <span>precio total</span>
            <span>eliminar</span>
        </div>
        {
        cart.map((productCart)=> (
            <div key={productCart.id} className="productocarrito">
                <p><img src={productCart.image[0]} alt="" /></p>
                <p>{productCart.name}</p>
                <p>{productCart.quantity}</p>
                <p>{productCart.price}€</p>
                <p>{productCart.quantity * productCart.price}€</p>
                <p><button onClick={ () => deleteProductById (productCart.id) }>borrar producto</button></p>
            </div>
        ))
        }
        <div className="finalcarrito">
        <p className="preciocarrito">Precio total: {totalPrice()}€</p>
        <button onClick={deleteCart}>Vaciar carrito</button>
        <Link to="/checkout">Continuar al pago</Link>
        </div>
    </div>
    )
}

export default Cart
