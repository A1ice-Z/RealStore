import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import styles from "../styles/Home.module.css"
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Home = () => {

    return (
        <>
            <Navbar />
            <main className={styles.homepage}>
                <div className={styles.homebox}>
                    <div className={styles.informationbox}>
                        <p className={styles.descriptiontext}>Real Materials</p>
                        <p className={styles.descriptiontext}>Real Style</p>
                        <p className={styles.shoptext}>RealStore</p>
                        <p className={styles.informationtext}>Experience premium clothing, jewelery and electronics made from authentic materials. Choose us for timeless fashion and exceptional craftsmanship</p>
                        <Link className={styles.link} to={"/Shopping"}><button className={styles.shoppingbutton} onClick={() => "/Shopping"}>Explore <FaArrowRight className={styles.arrow} /> </button></Link>
                    </div>
                    <img src="/woman.svg" alt="woman" className={styles.image} />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;
