import { CiSearch, CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <RxHamburgerMenu className={styles.hamburgmenu} />

            <div className={styles.navpage}>
                <Link to={"/"} className={styles.navlink}>
                    <p>HOME</p>
                </Link>
                <Link to={"/"} className={styles.navlink}>
                    <p>SHOP</p>
                </Link>
                <Link to={"/"} className={styles.navlink}>
                    <p>ABOUT</p>
                </Link>
                <Link to={"/"} className={styles.navlink}>
                    <p>CONTACT</p>
                </Link>
            </div>
            <div className={styles.navlogo}>
                <Link to={"/"}>
                    <img src="/Logo.svg" alt="logo" className={styles.logoimg} />
                </Link>
            </div>
            <div className={styles.navlinks}>
                <Link to={"/ShoppingCart"} className={styles.cardbutton}>
                    <p>MY CART</p>
                    <HiOutlineShoppingBag className={styles.whiteicon} />
                </Link>
                <Link to={"/Favorits"} className={styles.navlink}>
                    <CiHeart className={styles.blackicon} />
                </Link>
                <Link to={"/"} className={styles.navlink}>
                    <CiSearch className={styles.blackicon} />
                </Link>
            </div>
            <Link to={"/ShoppingCart"} className={styles.shoppingButton}>
                <HiOutlineShoppingBag className={styles.whiteicon} />
            </Link>
        </nav>
    )
}

export default Navbar