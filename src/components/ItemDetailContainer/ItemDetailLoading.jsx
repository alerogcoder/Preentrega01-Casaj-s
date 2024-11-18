import { PiSpinner } from "react-icons/pi"

const ItemDetailLoading = () => {
    return (
    <div>
        <p id="loadingproduct">Cargando producto...</p>
        <PiSpinner className="loadingicon"/>
    </div>
    )
}

export default ItemDetailLoading
