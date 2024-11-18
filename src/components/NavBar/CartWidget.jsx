import "./carrocompra.css"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import { PiShoppingCartBold } from "react-icons/pi"

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    const quantity = totalQuantity()

    return (
    <Link to="/cart" className="carrocompra" >
    <PiShoppingCartBold className={ quantity === 0 ? "emptycart" : "iconcart" }/>
    <p>{ quantity >= 1 && quantity }</p>
    </Link>
)
}

export default CartWidget
