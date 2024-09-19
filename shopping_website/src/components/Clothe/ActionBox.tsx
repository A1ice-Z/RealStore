import { FaRegHeart, FaHeart } from "react-icons/fa";
import styles from "./ActionBox.module.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toggleFavorite, getFavorites } from "../../utils/localStorage";
import { addToCart, CartItem, getCart } from "../../utils/sessionStorage";
import { useProducts } from "../../hooks/useProducts";

interface ActionBoxProps {
    productId: number;
}

const ActionBox = ({ productId }: ActionBoxProps) => {

    const quantity: number = 1;
    const [isFavorited, setIsFavorited] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const { data: products, isLoading, isError } = useProducts();

    if (isLoading) {
        return <section>Loading...</section>;
    }
    if (isError) {
        return <section>Error fetching products.</section>;
    }

    const product = products ? products.find((p) => p.id === productId) : null;

    const favorites = getFavorites();
    const isAlreadyFavorited = favorites.includes(productId);

    const productsInCart = getCart() || [];
    const isAlreadyInCart = productsInCart.some((product: CartItem) => product.productId === productId);

    if (!isAddedToCart && isAlreadyInCart) {
        setIsAddedToCart(true);
    }

    const addFavorite = (productId: number) => {
        if (!(isAlreadyFavorited)) {
            toggleFavorite(productId);
            console.log("Added this product as favorite:", product?.title);
        }
        else {
            toggleFavorite(productId);
            console.log("Removed this product as favorite:", product?.title);
        }
        setIsFavorited(!isFavorited);
    }

    const addProductToCart = (productId: number, quantity: number) => {
        addToCart(productId, quantity);
        setIsAddedToCart(true);
    }

    return (
        <section className={styles.shoppingPage}>
            <header className={styles.titleAndImage}>
                <nav className={styles.link}>
                    <Link to={"/"} className={styles.linkstyle}>Home</Link> /
                    <Link to={"/shopping"} className={styles.linkstyle}> Shop</Link> /
                    <p className={styles.linkstyle}> {product?.title}</p>
                </nav>
                <p className={styles.title}>SHOP - {product?.title}</p>
                <img src={product?.image} alt={product?.title} className={styles.imageView} />
            </header>
            <article className={styles.description}>
                {isAlreadyFavorited ? (
                    <FaHeart
                        className={`${styles.heartButton} ${styles.likedHeartButton}`}
                        onClick={() => addFavorite(productId)}
                    />
                ) : (
                    <FaRegHeart
                        className={`${styles.heartButton} ${styles.notLikedheartButton}`}
                        onClick={() => addFavorite(productId)}
                    />
                )}

                <p className={styles.titleInDesc}>{product?.title}</p>
                <p className={styles.price}>{product?.price} $</p>
                <p className={styles.taxes}>Taxes are included</p>
                <p className={styles.clotheDesc}>{product?.description}</p>
                {isAddedToCart ? (
                    <div className={styles.alreadyInCart}>ALREADY IN CART</div>
                ) : (
                    <button className={styles.cartButton} onClick={() => addProductToCart(productId, quantity)}>ADD TO CART</button>
                )
                }
            </article>
        </section >
    );
};

export default ActionBox;