import React from 'react';
import './FavoriteCards.css';
import { InterfaceProductCard } from './InterfaceProductCard';
import ClothingsCards from './ClothingsCards';
import { IoMdHeartEmpty } from 'react-icons/io';

const FavoriteCards: React.FC<InterfaceProductCard> = ({ id, title, price, category, image }) => {
  return (
    <div>
      <ClothingsCards id={id} title={title} price={price} category={category} image={image} />
      <IoMdHeartEmpty />
    </div>
  );
};

export default FavoriteCards;
