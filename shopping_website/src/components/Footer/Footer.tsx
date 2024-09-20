import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import footer from "/footer.svg"
import logo from "/Logo.svg"

const Footer = () => {
    return (
        <footer className={styles.footer} role="contentinfo" aria-label="Website Footer">
            <section className={styles.imageholder} aria-label="Footer Promotional Section">
                <img src={footer} alt="Decorative footer image" className={styles.image} />
                <p className={styles.title} aria-label="Explore Our Catalog Title">EXPLORE  OUR  CATALOG</p>
                <div className={styles.box} role="region" aria-label="Footer Navigation">
                    <div className={styles.informationbox}>                        
                        <p className={styles.informationtitle}  aria-label="General Section">GENERAL</p>
                        <Link to={"/"} className={styles.informationlink}>
                            <p className={styles.informationtext}  aria-label="Home Link">Home</p>
                        </Link>
                        <Link to={"/Shopping"} className={styles.informationlink}>
                            <p className={styles.informationtext} aria-label="Shop Link">Shop</p>
                        </Link>
                    </div>
                    <div className={styles.divider} role="separator" aria-hidden="true"/>
                    <div className={styles.logobox} aria-label="Footer Logo and Information">
                        <Link to={"/"}>
                            <img src={logo} alt="RealStore logo" className={styles.logoimg} aria-label="RealStore Logo" />
                        </Link>
                        <p className={styles.logoinformation} aria-label="Company Information">@2024 RealStore.com</p>
                    </div>
                </div>
            </section>
        </footer >
    );
}

export default Footer;