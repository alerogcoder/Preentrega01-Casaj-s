import { Link } from "react-router-dom"
import "./cart.css"

const CartEmpty = () => {
    return (
    <div className="cartempty">
        <h2>¡Vaya! No hay productos en el carrito 🛒</h2>
        <Link to="/">Volver al inicio</Link>
    </div>
    )
}

export default CartEmpty
