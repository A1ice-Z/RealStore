import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import styles from "../styles/Favorites.module.css"
import { Link } from "react-router-dom";

const Favorites = () => {
    return (
        <>
            <Navbar />
            <main className={styles.favoritepage}>
                <div className={styles.favoritecontainer}>
                    <nav className={styles.path}>
                        <Link className={styles.pathlink} to={"/"}>Home</Link> / Favorites
                    </nav>
                    <p className={styles.title}>FAVORITES</p>
                    <section className={styles.favoriteitems}>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>
                        <p>hellu</p>

                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Favorites;   