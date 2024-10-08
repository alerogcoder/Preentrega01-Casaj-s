import "./itemlistcontainer.css"

const ItemListContainer = ( { inventario, imagen }) => {

    return (
        <div className="itemlist">
            <h2>{inventario}</h2>
            <img src={imagen} />
        </div>
    )
}

export default ItemListContainer
