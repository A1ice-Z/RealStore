import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.imageholder}>
                <img src="/footer.svg" alt="logo" className={styles.image} />
                <p className={styles.title}>EXPLORE  OUR  CATALOG</p>
                <div className={styles.box}>
                    <div>
                        <p className={styles.informationtitle}>GENERAL</p>
                        <Link to={"/"} className={styles.informationlink}>
                            <p>Home</p>
                        </Link>
                        <Link to={"/"} className={styles.informationlink}>
                            <p>Shop</p>
                        </Link>
                        <Link to={"/"} className={styles.informationlink}>
                            <p>About us</p>
                        </Link>
                        <Link to={"/"} className={styles.informationlink}>
                            <p>Contact</p>
                        </Link>
                    </div>
                    <div>
                        <p className={styles.informationtitle}>PRODUCTS</p>
                        <Link to={"/"} className={styles.informationlink}>
                            <p>Electronics</p>
                        </Link>
                        <Link to={"/"} className={styles.informationlink}>
                            <p>Womens Fashion</p>
                        </Link>
                        <Link to={"/"} className={styles.informationlink}>
                            <p>Mens Fashion</p>
                        </Link>
                        <Link to={"/"} className={styles.informationlink}>
                            <p>Jewery</p>
                        </Link>
                    </div>
                    <view className={styles.divider} />
                    <div className={styles.logobox}>
                        <Link to={"/"}>
                            <img src="/Logo.svg" alt="logo" className={styles.logoimg} />
                        </Link>
                        <p className={styles.logoinformation}>@2024 RealStore.com</p>
                    </div>
                </div>
            </div>
        </footer >
    );
}

export default Footer;