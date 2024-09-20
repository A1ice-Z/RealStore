import { FaRegHeart, FaHeart } from "react-icons/fa";
import styles from "./ActionBox.module.css"
import { Link } from "react-router-dom";
import { useState } from "react";
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
        return <section role="status" aria-live="polite">Loading...</section>;
    }
    if (isError) {
        return <section  role="alert" aria-live="assertive">Error fetching products.</section>;
    }

    const product = products ? products.find((p) => p.id === productId) : null;

    const favorites = getFavorites();
    const isAlreadyFavorited = favorites.includes(productId);

    const productsInCart = getCart();
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
        <section className={styles.shoppingPage} role="region" aria-labelledby="product-title">
            <header className={styles.titleAndImage} role="banner">
                <nav className={styles.link} aria-label="Breadcrumb">
                    <Link to={"/"} className={styles.linkstyle}>Home</Link> /
                    <Link to={"/shopping"} className={styles.linkstyle}> Shop</Link> /
                    <p className={styles.linkstyle} id="product-title"> {product?.title}</p>
                </nav>
                <p className={styles.title}>SHOP - {product?.title}</p>
                <img src={product?.image} alt={product?.title} className={styles.imageView} aria-label={`Image of ${product?.title}`}/>
            </header>
            <article className={styles.description} role="region" aria-labelledby="product-description">
                {isAlreadyFavorited ? (
                    <FaHeart
                        className={`${styles.heartButton} ${styles.likedHeartButton}`}
                        onClick={() => addFavorite(productId)}
                        aria-label="Remove from favorites"
                        role="button"
                    />
                ) : (
                    <FaRegHeart
                        className={`${styles.heartButton} ${styles.notLikedheartButton}`}
                        onClick={() => addFavorite(productId)}
                        aria-label="Add to favorites"
                        role="button"
                    />
                )}
                <p className={styles.titleInDesc} id="product-description">{product?.title}</p>
                <p className={styles.price}>{product?.price} $</p>
                <p className={styles.taxes}>Taxes are included</p>
                <p className={styles.clotheDesc}>{product?.description}</p>
                {isAddedToCart ? (
                    <div className={styles.alreadyInCart} role="status" aria-live="polite">ALREADY IN CART</div>
                ) : (
                    <button className={styles.cartButton} onClick={() => addProductToCart(productId, quantity)} aria-label="Add to cart">ADD TO CART</button>
                )
                }
            </article>
        </section >
    );
};

export default ActionBox;