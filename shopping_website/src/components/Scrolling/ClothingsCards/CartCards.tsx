import React, { useState } from 'react';
import './ClothingsCards.css';
import './FavoriteCards.css';
import { InterfaceProductCard } from './InterfaceProductCard';
import { IoCart, IoCartOutline } from 'react-icons/io5';

const CartCards: React.FC<InterfaceProductCard> = ({ id, title, price, category, image }) => {
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const toggleCart = () => {
    setIsAddedToCart(!isAddedToCart); // Invert the current state (toggle between true and false)
  };
  return (
    <article className="clothingSection">
      <figure className="imgSpace">
        <img src={image} className="clothingImage" alt="Sweatshirt"></img>
      </figure>
      <section className="descriptionSpace">
        <header className="productType">
          <h5>{category}</h5>
          <div className="logoSpace" onClick={toggleCart}>
            {isAddedToCart ? <IoCart className="cart" /> : <IoCartOutline />}
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

export default CartCards;
