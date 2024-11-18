import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1)

    const handleClickRest = () => {
        if(count > 1) {
        setCount(count - 1)
        }
    }

    const handleClickAdd = () => {
        if(count < stock){
        setCount(count + 1)
        }
    }

    return (
        <div className="botonitemcount">
        <button onClick={handleClickRest}>-</button>
        <p>{count}</p>
        <button onClick={handleClickAdd}>+</button>

        <button onClick={ () => addProduct(count) }>Agregar</button>
        </div>
    );
};

export default ItemCount;
