import { useState, useContext } from "react"
import FormCheckout from "./FormCheckout"
import { CartContext } from "../../context/CartContext"
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore"
import db from "../../db/db.js"
import { Link } from "react-router-dom"

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

    const handleSubmitForm = (event) => {
        event.preventDefault()

        const order = {
            buyer: {...dataForm},
            products: [...cart],
            date: Timestamp.fromDate( new Date() ),
            total: totalPrice()
        }
        uploadOrder(order)
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
                <div>
                    <h2>Gracias por su compra</h2>
                    <p>Por favor guarde su número de seguimiento: {idOrder}</p>
                    <Link to="/">Volver al inicio</Link>
                </div>
            )
        }
        </div>
    )
}

export default Checkout