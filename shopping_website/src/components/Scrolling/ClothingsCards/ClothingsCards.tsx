import React from 'react';
import './ClothingsCards.css';
import { InterfaceProductCard } from './InterfaceProductCard';

const ClothingsCards: React.FC<InterfaceProductCard> = ({ id, title, price, image }) => {
  return (
    <article className="clothingSection">
      <figure className="imgSpace">
        <img src={image} className="clothingImage" alt="Sweatshirt"></img>
      </figure>
      <section className="descriptionSpace">
        <header className="productType">
          <h5>{title}</h5>
        </header>
        <footer className="nameAndPrice">
          <span className="productname">
            <h4>Zheng Originals</h4>
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
