import styles from "./Scrolling.module.css"
import ClothingsCards from "./ClothingsCards/ClothingsCards.tsx";
import { useProducts} from "../../hooks/useProducts.ts";
import { Product } from "../../models/Product.ts";
import { Filter } from "../../pages/Shopping.tsx";

interface scrollingProps {
  favorite: boolean;
  cart: boolean;
  selectedFilter: Filter;
}

const Scrolling = ({ favorite, cart, selectedFilter }: scrollingProps) => {
  const { data: products, isLoading, isError } = useProducts(selectedFilter.category, undefined, selectedFilter.values.min, selectedFilter.values.max, undefined);

  if (isLoading) {
    return <section>Loading...</section>;
  }
  if (isError) {
    return <section>Error fetching products.</section>;
  }

  return (
    <section className={styles.clothesSections}>
      <article className={styles.rows}>
      {(products && products.length > 0)? (
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
          <h3>No products available.</h3>
        )}
      </article>
    </section>
  );
};

export default Scrolling;
