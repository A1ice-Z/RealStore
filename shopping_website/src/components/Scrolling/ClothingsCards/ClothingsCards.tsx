import React, { useState } from "react";
import "./ClothingsCards.css";
import { IoCart, IoCartOutline } from "react-icons/io5";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import styles from "./Scrolling.module.css"

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
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const toggleCart = () => {
    setIsAddedToCart(!isAddedToCart);
  };

  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <article className={styles.clothingSection}>
      <figure className={styles.imgContainer}>
        <img src={image} className={styles.clothingImage} alt="ItemImages"></img>
      </figure>
      <section className={styles.descriptionSpace}>
        <header className={styles.productType}>
          <h5>{category}</h5>
          <section className={styles.IconSpace}>
            {cart && (
              <span onClick={toggleCart}>{isAddedToCart ? <IoCart /> : <IoCartOutline />}</span>
            )}
            {favorite && (
              <span onClick={toggleFavorite}>
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
