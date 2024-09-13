import './Scrolling.css';
import ClothingsCards from './ClothingsCards/ClothingsCards.tsx';
import clothingImageDefault from './SweatshirtDefault.png';

const Scrolling = () => {
  return (
    <section className="clothesSections">
      <article className="rows">
        <ClothingsCards id={123} title={'crewneck'} price={199} image={clothingImageDefault} />
        <ClothingsCards id={123} title={'crewneck'} price={199} image={clothingImageDefault} />
        <ClothingsCards id={123} title={'crewneck'} price={199} image={clothingImageDefault} />
      </article>
      <article className="rows">
        <ClothingsCards id={123} title={'crewneck'} price={199} image={clothingImageDefault} />
        <ClothingsCards id={123} title={'crewneck'} price={199} image={clothingImageDefault} />
        <ClothingsCards id={123} title={'crewneck'} price={199} image={clothingImageDefault} />
      </article>
      <article className="rows">
        <ClothingsCards id={123} title={'crewneck'} price={199} image={clothingImageDefault} />
        <ClothingsCards id={123} title={'crewneck'} price={199} image={clothingImageDefault} />
        <ClothingsCards id={123} title={'crewneck'} price={199} image={clothingImageDefault} />
      </article>
      <article className="rows">
        <ClothingsCards id={123} title={'crewneck'} price={199} image={clothingImageDefault} />
        <ClothingsCards id={123} title={'crewneck'} price={199} image={clothingImageDefault} />
        <ClothingsCards id={123} title={'crewneck'} price={199} image={clothingImageDefault} />
      </article>
    </section>
  );
};

export default Scrolling;
