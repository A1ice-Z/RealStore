import { useEffect, useState } from "react";
import styles from "./ClothingsCards.module.css";
import { IoCart, IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { getFavorites, toggleFavorite } from "../../../utils/localStorage";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { addToCart, getCart, updateCartQuantity } from "../../../utils/sessionStorage";

interface InterfaceProductCard {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  cart: boolean;
  favorite: boolean;
}

const ClothingsCards = ({ id, title, price, category, image, cart, favorite }: InterfaceProductCard) => {
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);
  const router = useLocation();
  const navigate = useNavigate();


  const handleCart = () => {
    if (isAddedToCart) {
      updateCartQuantity(id, 0)
      setIsAddedToCart(false)
    }
    else {
      addToCart(id)
      setIsAddedToCart(true)
    }

    if (router.pathname == "/ShoppingCart") {
      navigate(0)
    }
  };

  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  const handleFavorites = () => {
    toggleFavorite(id);
    setIsFavorited(!isFavorited)
    if (router.pathname == "/Favorites") {
      navigate(0)
    }
  }

  useEffect(() => {
    const currentCart = getCart().map((cart) => cart.productId)
    if (currentCart?.includes(id)) {
      setIsAddedToCart(true)
    }

    const currentfavorites = getFavorites();
    if (currentfavorites?.includes(id)) {
      setIsFavorited(true)
    }
  }, [id])

  return (
    <article className={styles.clothingSection} role="region" aria-label={`Product card for ${title}`}>
<<<<<<< HEAD
      <figure className={styles.imgContainer} >
        <Link to={`/Clothe/${id}`}>
          <img src={image} className={styles.clothingImage} alt={`Image of ${title}`}></img>
        </Link>
=======
      <figure className={styles.imgContainer}>
        <img src={image} className={styles.clothingImage} alt={`Image of ${title}`}></img>
>>>>>>> a61a1c3 (refactor(#38): add aria-labels and roles where they are needed)
      </figure>
      <section className={styles.descriptionSpace}>
        <header className={styles.productType}>
          <h5>{category}</h5>
          <section className={styles.IconSpace} aria-label="Product Actions">
            {cart && (
              <span onClick={handleCart}>{isAddedToCart ? <IoCart /> : <IoCartOutline />}</span>
            )}
            {favorite && (
              <span onClick={handleFavorites}>
                {isFavorited ? <IoMdHeart className={styles.favorited} /> : <IoMdHeartEmpty />}
              </span>
            )}
          </section>
        </header>
        <footer className={styles.nameAndPrice}>
          <span className={styles.productname}>
            <h4 className={styles.h4text}>{title}</h4>
          </span>
          <span className={styles.price}>
            <h4 className={styles.h4text}>$ {price}</h4>
          </span>
        </footer>
      </section>
    </article>
  );
};

export default ClothingsCards;