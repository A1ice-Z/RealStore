import './Scrolling.css';
import ClothingsCards from './ClothingsCards/ClothingsCards.tsx';
import clothingImageDefault from './SweatshirtDefault.png';
import { useProducts } from '../../hooks/useProducts.ts';
import { Product } from '../../models/Product.ts';

const Scrolling: React.FC = () => {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching products.</div>;
  }

  return (
    <section className="clothesSections">
      <article className="rows">
        {products?.map((product: Product) => (
          <ClothingsCards
            key={product.id}
            id={product.id}
            title={product.title.substring(0, 20) + '...'}
            price={product.price}
            category={product.category}
            image={product.image}
            cart={true}
            favorite={true}
          />
        ))}
      </article>
    </section>
  );
};

export default Scrolling;
