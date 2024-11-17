import { useState, useEffect, useRef } from "react";
import ContadorView from "./ContadorView";

const ContadorEventListener = ({ stock }) => {
    const [contador, setContador] = useState(0);
    const buttonAddRef = useRef(null);
    const buttonSubtractRef = useRef(null);

    const handleAdd = () => {
        if (contador < stock) {
            setContador((prev) => prev + 1);
        }
    };

    const handleSubtract = () => {
        if (contador > 0) {
            setContador((prev) => prev - 1);
        }
    };

    useEffect(() => {
        const buttonAdd = buttonAddRef.current;
        const buttonSubtract = buttonSubtractRef.current;

        buttonAdd.addEventListener("click", handleAdd);
        buttonSubtract.addEventListener("click", handleSubtract);

        // Limpieza al desmontar
        return () => {
            buttonAdd.removeEventListener("click", handleAdd);
            buttonSubtract.removeEventListener("click", handleSubtract);
        };
    }, [contador, stock]); 

    return (
        <ContadorView
            contador={contador}
            onAdd={handleAdd}
            onSubtract={handleSubtract}
            buttonAddRef={buttonAddRef}
            buttonSubtractRef={buttonSubtractRef}
        />
    );
};

export default ContadorEventListener;
