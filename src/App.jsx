import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />

      <div className="wrap">
      <Routes>
        <Route path="/" element={ <ItemListContainer/> } />
        <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
        <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}></Route>
      </Routes>
      </div>

      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
