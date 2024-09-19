import styles from "./Scrolling.module.css"
import ClothingsCards from "./ClothingsCards/ClothingsCards.tsx";
import { useProducts } from "../../hooks/useProducts.ts";
import { Product } from "../../models/Product.ts";

interface interfaceScrolling {
  favorite: boolean;
  cart: boolean;
  selectedFilters: SelectedFilters;
}

interface SelectedFilters {
  categories: string | null;
  priceRange: string | null;
}

const Scrolling = ({ favorite, cart, selectedFilters }: interfaceScrolling) => {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) {
    return <section>Loading...</section>;
  }
  if (isError) {
    return <section>Error fetching products.</section>;
  }

  const filteredProducts = products?.filter((product: Product) => {
    const matchesCategory = selectedFilters.categories
      ? product.category.toLowerCase() === selectedFilters.categories.toLowerCase()
      : true;

      const matchesPrice = selectedFilters.priceRange
      ? (() => {
          const [min, max] = selectedFilters.priceRange.replace(" $", "").split('-').map(Number);
          return product.price >= min && product.price <= max;
        })()
      : true;

    return matchesCategory && matchesPrice;
  });

  return (
    <section className={styles.clothesSections}>
      <article className={styles.rows}>
      {(filteredProducts && filteredProducts.length > 0)? (
          filteredProducts.map((product: Product) => (
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
