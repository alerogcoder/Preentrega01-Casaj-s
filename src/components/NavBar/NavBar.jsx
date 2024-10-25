import "./navbar.css"
import logo from "../../assets/ikigailogo.png"
import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"

const NavBar = () => {



    return (
        <nav className="navbar">
            <Link to="/" className="brand">
                <img src={logo} />
                <h2>Ikigai Sushi</h2>
            </Link>
            <ul>
                <li><Link to="/category/nigiri">Nigiri</Link></li>
                <li><Link to="/category/maki">Maki</Link></li>
                <li><Link to="/category/sashimi">Sashimi</Link></li>
                <li><Link to="/category/temaki">Temaki</Link></li>
                <li><Link to="/category/uramaki">Uramaki</Link></li>
                <li><Link to="/category/gunkan">Gunkan</Link></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar
