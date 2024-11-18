import { PiSpinner} from "react-icons/pi"

const ItemListLoading = () => {
    return (
        <div>
            <p id="loadingproduct">Cargando listado...</p>
            <PiSpinner className="loadingicon" />
        </div>
    )
}

export default ItemListLoading
