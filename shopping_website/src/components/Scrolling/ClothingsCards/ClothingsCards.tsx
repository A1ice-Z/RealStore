import React, { useState } from 'react';
import './ClothingsCards.css';
import './LogoSection.css';
import { InterfaceProductCard } from './InterfaceProductCard';
import { IoCart, IoCartOutline } from 'react-icons/io5';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';

const ClothingsCards: React.FC<InterfaceProductCard> = ({ id, title, price, category, image }) => {
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
          <div className="logoSpace">
            <div onClick={toggleCart}>{isAddedToCart ? <IoCart className="cart" /> : <IoCartOutline />}</div>
            <div onClick={toggleFavorite}>{isFavorited ? <IoMdHeart className="favorited" /> : <IoMdHeartEmpty />}</div>
          </div>
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
