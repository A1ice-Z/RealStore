import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.imageholder}>
                <img src="/footer.svg" alt="footer" className={styles.image} />
                <h2 className={styles.title}>EXPLORE OUR CATALOG</h2>
                <div className={styles.box}>
                    <nav>
                        <h3 className={styles.informationtitle}>GENERAL</h3>
                        <ul className={styles.ulstyle}>
                            <li>
                                <Link to={"/"} className={styles.informationlink}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/"} className={styles.informationlink}>Shop</Link>
                            </li>
                            <li>
                                <Link to={"/"} className={styles.informationlink}>About us</Link>
                            </li>
                            <li>
                                <Link to={"/"} className={styles.informationlink}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <h3 className={styles.informationtitle}>PRODUCTS</h3>
                        <ul className={styles.ulstyle}>
                            <li>
                                <Link to={"/"} className={styles.informationlink}>Electronics</Link>
                            </li>
                            <li>
                                <Link to={"/"} className={styles.informationlink}>Womens Fashion</Link>
                            </li>
                            <li>
                                <Link to={"/"} className={styles.informationlink}>Mens Fashion</Link>
                            </li>
                            <li>
                                <Link to={"/"} className={styles.informationlink}>Jewelry</Link>
                            </li>
                        </ul>
                    </nav>
                    <hr className={styles.divider} />
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