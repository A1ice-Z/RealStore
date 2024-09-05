import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navlogo">
                <Link to={"/"}>
                    <h1>RealShop</h1>
                </Link>
            </div>
            <div className="searchfield">

            </div>
            <div className="navlinks">
                <Link to={"/ShoppingCart"}>
                    <RiShoppingBag3Line />
                    <h3>Shopping Cart</h3>
                </Link>
                <Link to={"/Favorits"}>
                    <FaRegHeart />
                    <h3>Favorits</h3>
                </Link>
                <Link to={"/Profile"}>
                    <CgProfile />
                    <h3>Profile</h3>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar