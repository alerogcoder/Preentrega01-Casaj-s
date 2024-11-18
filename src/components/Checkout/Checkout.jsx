import { useState, useContext } from "react"
import FormCheckout from "./FormCheckout"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"
import "./checkout.css"
import validateForm from "../../utils/validateForm.js"
import { toast } from "react-toastify"

const Checkout = () => {

    const [dataForm, setDataForm] = useState({
        fullname: "", 
        phone: "",
        email: ""
    })
    const [idOrder, setIdOrder] = useState(null)
    const { cart, totalPrice, deleteCart } = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm( { ...dataForm, [event.target.name]: event.target.value } )
    }

    const handleSubmitForm = async(event) => {
        event.preventDefault()

        const order = {
            buyer: {...dataForm},
            products: [...cart],
            date: Timestamp.fromDate( new Date() ),
            total: totalPrice()
        }

        try {
            const response = await validateForm(dataForm)
            if (response.status === "error") throw new Error(response.message)

            toast.success("¡Compra finalizada!")
            uploadOrder(order)

        } catch (error) {
            toast.error(error.message)
        }
    }

    const uploadOrder = (newOrder) => {
        const ordersRef = collection(db, "orders")
        addDoc(ordersRef, newOrder)
        .then((response)=> setIdOrder(response.id))
        .catch((error)=> console.log(error))
        .finally(()=> {
            updateStock()
        })
    }

    const updateStock = () => {
        cart.map(( {id, quantity, ...dataProduct} ) => {
            const productRef = doc(db, "products", id)
            setDoc(productRef, { ...dataProduct, stock: dataProduct.stock - quantity })
        })
            deleteCart()
    }

    return (
        <div>
        {
            idOrder === null ? (
                <FormCheckout 
        dataForm={dataForm} 
        handleChangeInput={handleChangeInput} 
        handleSubmitForm={handleSubmitForm} />
            ) : (
                <div className="fincompra">
                    <h2>Gracias por su compra</h2>
                    <p>Por favor, guarde su número de seguimiento: <span>{idOrder}</span></p>
                    <Link to="/">Volver al inicio</Link>
                </div>
            )
        }
        </div>
    )
}

export default Checkout
