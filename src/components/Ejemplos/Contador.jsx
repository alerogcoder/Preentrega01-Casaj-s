import { useState, useEffect } from "react"
import ContadorView from "../Contadores/ContadorView"

const Contador = () => {
    const [ contador, setContador ] = useState(0)
    const [toggle, setToggle] = useState(true)

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

const alternarToggle = () => {
    setToggle( !toggle )
}
//se ejecuta solo al montar el componente
//ej: llamadas a api, subscripciones a eventListener
useEffect( ()=> {
    console.log("1er useEffect")
}, []) 

// se ejecuta en el montaje y cada vez que "contador" cambie
// ej: para acciones especificas cuando una variable cambie
useEffect ( ()=> {
    console.log("2do useEffect")
}, [contador])

// se ejecuta en el montaje y siempre que una variable en el componente cambie "Contador.jsx"
// ej: funciones de monitoreo o registro del usuario, analitica de datos
useEffect ( ()=> {
    console.log("3er useEffect")
})


    return (
        <ContadorView contador={contador} aumentarContador={aumentarContador} restarContador={restarContador} />
    )
}
export default Contador
