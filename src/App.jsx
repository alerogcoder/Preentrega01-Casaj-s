import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"

function App() {

  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <NavBar />
      <div className="wrap">
      <Routes>
        <Route path="/" element={ <ItemListContainer/> } />
        <Route path="/category/:idCategory" element={<ItemListContainer/>}/>
        <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      </div>
      <Footer />
      </CartProvider>
    </BrowserRouter>
    </>
  )
}

export default App
