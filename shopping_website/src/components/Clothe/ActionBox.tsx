import { FaRegHeart, FaHeart } from "react-icons/fa";
import styles from "./ActionBox.module.css"
import { Link } from "react-router-dom";
import { useState } from "react";
import { toggleFavorite, getFavorites } from "../../utils/localStorage";
import { addToCart } from "../../utils/sessionStorage";

interface ActionBoxProps {
    productId: number;
    image: string;
    title: string;
    price: string;
    description: string;
}

const ActionBox = ({ productId, image, title, price, description }: ActionBoxProps) => {

    const [isFavorited, setIsFavorited] = useState(false);

    const quantity: number = 1;

    const addFavourite = (productId: number) => {
        if (!getFavorites().includes(productId)) {
            toggleFavorite(productId);
            console.log("Added this item as favourite:", title);
        }
        else {
            toggleFavorite(productId);
            console.log("Removed this item as favourite:", title);
        }
        setIsFavorited(!isFavorited);
    }

    return (
        <section className={styles.shoppingPage}>
            <header className={styles.titleAndImage}>
                <nav className={styles.link}>
                    <Link to={"/"} className={styles.linkstyle}>Home</Link>
                    <Link to={"/shopping"} className={styles.linkstyle}>/ Shop</Link>
                    <p className={styles.linkstyle}>/ {title}</p>
                </nav>
                <p className={styles.title}>SHOP - {title}</p>
                <img src={image} alt={title} className={styles.imageView} />
            </header>
            <article className={styles.description}>
                {isFavorited ? (
                    <FaHeart
                        className={`${styles.heartButton} ${styles.likedHeartButton}`}
                        onClick={() => addFavourite(productId)}
                    />
                ) : (
                    <FaRegHeart
                        className={`${styles.heartButton} ${styles.notLikedheartButton}`}
                        onClick={() => addFavourite(productId)}
                    />
                )}

                <p className={styles.titleInDesc}>{title}</p>
                <p className={styles.price}>{price}</p>
                <p className={styles.taxes}>Taxes are included</p>
                <p className={styles.clotheDesc}>{description}</p>
                <button className={styles.cartButton} onClick={() => addToCart(productId, quantity)}>ADD TO CART</button>
            </article>
        </section>
    );
};

export default ActionBox;