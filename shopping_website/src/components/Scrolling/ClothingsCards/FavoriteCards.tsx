import React, { useState } from 'react';
import './ClothingsCards.css';
import './FavoriteCards.css';
import { InterfaceProductCard } from './InterfaceProductCard';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';

const FavoriteCards: React.FC<InterfaceProductCard> = ({ id, title, price, category, image }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const toggleFavorite = () => {
    setIsFavorited(!isFavorited); // Invert the current state (toggle between true and false)
  };

  return (
    <article className="clothingSection">
      <figure className="imgSpace">
        <img src={image} className="clothingImage" alt="Sweatshirt"></img>
      </figure>
      <section className="descriptionSpace">
        <header className="productType">
          <h5>{category}</h5>
          <div className="heartSpace" onClick={toggleFavorite}>
            {isFavorited ? <IoMdHeart className="favorited" /> : <IoMdHeartEmpty />}
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

export default FavoriteCards;
