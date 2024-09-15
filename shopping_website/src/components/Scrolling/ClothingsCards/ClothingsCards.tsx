import React, { useState } from 'react';
import './ClothingsCards.css';
import { IoCart, IoCartOutline } from 'react-icons/io5';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';

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
    <article className="clothingSection">
      <figure className="imgSpace">
        <img src={image} className="clothingImage" alt="Sweatshirt"></img>
      </figure>
      <section className="descriptionSpace">
        <header className="productType">
          <h5>{category}</h5>
          <section className="IconSpace">
            {cart && (
              <span onClick={toggleCart}>{isAddedToCart ? <IoCart className="cart" /> : <IoCartOutline />}</span>
            )}
            {favorite && (
              <span onClick={toggleFavorite}>
                {isFavorited ? <IoMdHeart className="favorited" /> : <IoMdHeartEmpty />}
              </span>
            )}
          </section>
        </header>
        <footer className="nameAndPrice">
          <span className="productname">
            <h4>{title}</h4>
          </span>
          <span className="price">
            <h4>$ {price}</h4>
          </span>
        </footer>
      </section>
    </article>
  );
};

export default ClothingsCards;
