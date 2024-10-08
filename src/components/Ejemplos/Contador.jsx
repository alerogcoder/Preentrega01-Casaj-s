import { useState } from "react"
import ContadorView from "./ContadorView"

const Contador = () => {

    const [ contador, setContador ] = useState(0)

    const aumentarContador = () => {
        if (contador < 10) {
        setContador(contador + 1)
        }
    }

    const restarContador = () => {
        if (contador > 0) {
            setContador(contador -1)
        }
    }
    return (
        <ContadorView contador={contador} aumentarContador={aumentarContador} restarContador={restarContador} />
    )
}

export default Contador
