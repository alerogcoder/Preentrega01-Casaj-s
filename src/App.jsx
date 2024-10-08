// import NavBar from "./components/NavBar"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import './App.css'
import sushi1 from './assets/tiposushi1.png'
import sushi2 from './assets/tiposushi2.png'

function App() {

  return (
    <div>
      <NavBar />
      <wrap>
      <listado>
      <ItemListContainer inventario={"Tabla de 15"} imagen={sushi2}/>
      <ItemListContainer inventario={"Tabla de 10"} imagen={sushi1}/>
      </listado>
      </wrap>
    </div>
  )
}

export default App
