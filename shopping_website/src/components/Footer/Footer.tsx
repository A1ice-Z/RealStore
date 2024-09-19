import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.imageholder}>
                <img src="/footer.svg" alt="footer" className={styles.image} />
                <p className={styles.title}>EXPLORE  OUR  CATALOG</p>
                <div className={styles.box}>
                    <div className={styles.informationbox}>
                        <div>
                            <p className={styles.informationtitle}>GENERAL</p>
                            <Link to={"/"} className={styles.informationlink}>
                                <p className={styles.informationtext}>Home</p>
                            </Link>
                            <Link to={"/Shopping"} className={styles.informationlink}>
                                <p className={styles.informationtext}>Shop</p>
                            </Link>
                        </div>
                        <div>
                            <p className={styles.informationtitle}>PRODUCTS</p>
                            <Link to={"/"} className={styles.informationlink}>
                                <p className={styles.informationtext}>Electronics</p>
                            </Link>
                            <Link to={"/"} className={styles.informationlink}>
                                <p className={styles.informationtext}>Women's Fashion</p>
                            </Link>
                            <Link to={"/"} className={styles.informationlink}>
                                <p className={styles.informationtext}>Men's Fashion</p>
                            </Link>
                            <Link to={"/"} className={styles.informationlink}>
                                <p className={styles.informationtext}>Jewelry</p>
                            </Link>
                        </div>
                    </div>
                    <view className={styles.divider} />
                    <div className={styles.logobox}>
                        <Link to={"/"}>
                            <img src="/Logo.svg" alt="logo" className={styles.logoimg} />
                        </Link>
                        <p className={styles.logoinformation}>@2024 RealStore.com</p>
                    </div>
                </div>
            </section>
        </footer >
    );
}

export default Footer;