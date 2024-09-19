import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";
import logo from "/Logo.svg"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <main>
            <nav className={styles.navbar}>
                {isOpen && <div className={styles.mobilemenu}>
                    <div className={styles.crosspos}>
                        <RxCross1 className={styles.cross} onClick={() => setIsOpen(false)} />
                    </div>

                    <Link to={"/"} className={styles.navlink}>
                        <p>HOME</p>
                    </Link>
                    <Link to={"/Shopping"} className={styles.navlink}>
                        <p>SHOP</p>
                    </Link>
                    <Link to={"/Favorites"} className={styles.navlink}>
                        <p>FAVORITES</p>
                    </Link>
                </div>}
                <RxHamburgerMenu className={styles.hamburgmenu} onClick={() => setIsOpen(true)} />
                <div className={styles.navpage}>
                    <Link to={"/"} className={styles.navlink}>
                        <p>HOME</p>
                    </Link>
                    <Link to={"/Shopping"} className={styles.navlink}>
                        <p>SHOP</p>
                    </Link>
                </div>
                <div className={styles.navlogo}>
                    <Link to={"/"}>
                        <img src={logo} alt="logo" className={styles.logoimg} />
                    </Link>
                </div>
                <div className={styles.navlinks}>
                    <Link to={"/ShoppingCart"} className={styles.cardbutton}>
                        <p>MY CART</p>
                        <HiOutlineShoppingBag className={styles.whiteicon} />
                    </Link>
                    <Link to={"/Favorites"} className={styles.navlink}>
                        <CiHeart className={styles.heart} />
                    </Link>
                </div>
                <Link to={"/ShoppingCart"} className={styles.shoppingButton}>
                    <HiOutlineShoppingBag className={styles.whiteicon} />
                </Link>
            </nav>
        </main>
    )
}

export default Navbar