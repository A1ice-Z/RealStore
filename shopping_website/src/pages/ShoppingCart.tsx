import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/ShoppingCart.module.css";
import OrderSummaryList from "../components/ShoppingCart/OrderSummaryList";
import OrderSummaryItems from "../components/ShoppingCart/OrderSummaryItems";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
    return (
        <>
            <Navbar />
            <main className={styles.shoppingcart}>
                <div className={styles.cartbox}>
                    <div className={styles.titles}>
                        <p className={styles.path}><Link className={styles.pathlink} to={"/"}> Home </Link>/ Cart</p>
                        <p className={styles.title}>MY CART</p>
                    </div>
                    <div className={styles.cart}>
                        <OrderSummaryItems />
                        <OrderSummaryList />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ShoppingCart;