import styles from './Scrolling.module.css'
import ClothingsCards from './ClothingsCards/ClothingsCards.tsx';
import { useProducts } from '../../hooks/useProducts.ts';
import { Product } from '../../models/Product.ts';

interface interfaceScrolling {
  favorite: boolean;
  cart: boolean;
}

const Scrolling = ({ favorite, cart }: interfaceScrolling) => {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) {
    return <section>Loading...</section>;
  }
  if (isError) {
    return <section>Error fetching products.</section>;
  }

  return (
    <section className={styles.clothesSections}>
      <article className={styles.rows}>
        {products ? (
          products.map((product: Product) => (
            <ClothingsCards
              key={product.id}
              id={product.id}
              title={product.title.substring(0, 20) + "..."}
              price={product.price}
              category={product.category.charAt(0).toUpperCase() + product.category.substring(1)}
              image={product.image}
              cart={cart}
              favorite={favorite}
            />
          ))
        ) : (
          <div>No products available.</div>
        )}
      </article>
    </section>
  );
};

export default Scrolling;
