import "./navbar.css"
import logo from "../../assets/ikigailogo.png"
import CartWidget from "./CartWidget"

const NavBar = () => {



    return (
        <nav className="navbar">
            <div className="brand">
                <img src={logo} />
                <h2>Ikigai Sushi</h2>
            </div>
            <ul>
                <li>Nigiri</li>
                <li>Maki</li>
                <li>Sashimi</li>
                <li>Temaki</li>
                <li>Uramaki</li>
                <li>Gunkan</li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar
