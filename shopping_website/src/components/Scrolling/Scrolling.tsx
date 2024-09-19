import styles from "./Scrolling.module.css"
import ClothingsCards from "./ClothingsCards/ClothingsCards.tsx";
import { useProducts} from "../../hooks/useProducts.ts";
import { Product } from "../../models/Product.ts";
import { getFilteredItems, setFilteredItems } from "../../utils/sessionStorage.ts";
import { useEffect, useState } from "react";

interface interfaceScrolling {
  favorite: boolean;
  cart: boolean;
  selectedFilters: SelectedFilters;
}

interface SelectedFilters {
  categories: string | undefined;
  priceRange: string | undefined;
}

const Scrolling = ({ favorite, cart, selectedFilters }: interfaceScrolling) => {
  const filteredItemIDs = getFilteredItems();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const category = selectedFilters.categories;
  const priceRange = selectedFilters?.priceRange?.replace(" $", "") ?? ""; 
  const [min, max] = priceRange.split("-").map(Number);
  const { data: products, isLoading, isError } = useProducts(category, undefined, min, max, undefined);

  useEffect(() => {
    if (!products) {
      return; 
    }
    let currentFilteredProducts;
    if (filteredItemIDs.length === 0) {
      currentFilteredProducts = products;
    } else {
      currentFilteredProducts = products.filter((product) => filteredItemIDs.includes(product.id));
    }
    setFilteredProducts(currentFilteredProducts);
    const filteredProductIDs = currentFilteredProducts.map(product => product.id);
    sessionStorage.setItem("filteredProductIDs", JSON.stringify(filteredProductIDs));
    setFilteredItems(filteredProductIDs);
  }, [products, filteredItemIDs, setFilteredItems]);

  if (isLoading) {
    return <section>Loading...</section>;
  }
  if (isError) {
    return <section>Error fetching products.</section>;
  }

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
