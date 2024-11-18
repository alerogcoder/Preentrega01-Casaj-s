import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartEmpty from "./CartEmpty"
import "./cart.css"

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
            <span>precio</span>
            <span>eliminar</span>
        </div>
        {
        cart.map((productCart)=> (
            <div key={productCart.id} className="productocarrito">
                <img src={productCart.image[0]} alt="" />
                <p>{productCart.name}</p>
                <p>Cantidad: {productCart.quantity}</p>
                <p>Precio: {productCart.price}</p>
                <p>Precio parcial: {productCart.quantity * productCart.price}</p>
                <button onClick={ () => deleteProductById (productCart.id) }>borrar producto</button>
            </div>
        ))
        }
        <p className="preciocarrito">Precio total: {totalPrice()}</p>
        <button onClick={deleteCart}>Borrar carrito</button>
    </div>
    )
}

export default Cart
