import './Scrolling.css';
import ClothingsCards from './ClothingsCards/ClothingsCards.tsx';
import FavoriteCards from './ClothingsCards/FavoriteCards.tsx';
import CartCards from './ClothingsCards/CartCards';
import clothingImageDefault from './SweatshirtDefault.png';

const Scrolling = () => {
  return (
    <section className="clothesSections">
      <article className="rows">
        <ClothingsCards
          id={123}
          title={'zhengs Originals'}
          price={199}
          category={'crewneck'}
          image={clothingImageDefault}
        />
        <ClothingsCards
          id={123}
          title={'zhengs Originals'}
          price={199}
          category={'crewneck'}
          image={clothingImageDefault}
        />
        <ClothingsCards
          id={123}
          title={'zhengs Originals'}
          price={199}
          category={'crewneck'}
          image={clothingImageDefault}
        />
      </article>
      <article className="rows">
        <ClothingsCards
          id={123}
          title={'zhengs Originals'}
          price={199}
          category={'crewneck'}
          image={clothingImageDefault}
        />
        <ClothingsCards
          id={123}
          title={'zhengs Originals'}
          price={199}
          category={'crewneck'}
          image={clothingImageDefault}
        />
        <ClothingsCards
          id={123}
          title={'zhengs Originals'}
          price={199}
          category={'crewneck'}
          image={clothingImageDefault}
        />
      </article>
      <article className="rows">
        <ClothingsCards
          id={123}
          title={'zhengs Originals'}
          price={199}
          category={'crewneck'}
          image={clothingImageDefault}
        />
        <ClothingsCards
          id={123}
          title={'zhengs Originals'}
          price={199}
          category={'crewneck'}
          image={clothingImageDefault}
        />
        <ClothingsCards
          id={123}
          title={'zhengs Originals'}
          price={199}
          category={'crewneck'}
          image={clothingImageDefault}
        />
      </article>
      <article className="rows">
        <ClothingsCards
          id={123}
          title={'zhengs Originals'}
          price={199}
          category={'crewneck'}
          image={clothingImageDefault}
        />
        <ClothingsCards
          id={123}
          title={'zhengs Originals'}
          price={199}
          category={'crewneck'}
          image={clothingImageDefault}
        />
        <ClothingsCards
          id={123}
          title={'zhengs Originals'}
          price={199}
          category={'crewneck'}
          image={clothingImageDefault}
        />
      </article>
      <article className="rows">
        <FavoriteCards
          id={123}
          title={'zhengs Originals'}
          price={199}
          category={'crewneck'}
          image={clothingImageDefault}
        />
        <FavoriteCards
          id={123}
          title={'zhengs Originals'}
          price={199}
          category={'crewneck'}
          image={clothingImageDefault}
        />
        <FavoriteCards
          id={123}
          title={'zhengs Originals'}
          price={199}
          category={'crewneck'}
          image={clothingImageDefault}
        />
      </article>
      <article className="rows">
        <FavoriteCards
          id={123}
          title={'zhengs Originals'}
          price={199}
          category={'crewneck'}
          image={clothingImageDefault}
        />
        <FavoriteCards
          id={123}
          title={'zhengs Originals'}
          price={199}
          category={'crewneck'}
          image={clothingImageDefault}
        />
        <FavoriteCards
          id={123}
          title={'zhengs Originals'}
          price={199}
          category={'crewneck'}
          image={clothingImageDefault}
        />
      </article>
      <article className="rows">
        <CartCards id={123} title={'zhengs Originals'} price={199} category={'crewneck'} image={clothingImageDefault} />
        <CartCards id={123} title={'zhengs Originals'} price={199} category={'crewneck'} image={clothingImageDefault} />
        <CartCards id={123} title={'zhengs Originals'} price={199} category={'crewneck'} image={clothingImageDefault} />
      </article>
    </section>
  );
};

export default Scrolling;
