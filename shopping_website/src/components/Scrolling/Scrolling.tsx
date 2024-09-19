import styles from "./Scrolling.module.css"
import ClothingsCards from "./ClothingsCards/ClothingsCards.tsx";
import { useProducts} from "../../hooks/useProducts.ts";
import { Product } from "../../models/Product.ts";
import { getFilteredItems, setFilteredItems, clearFilteredItems } from "../../utils/sessionStorage.ts";
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
    let currentFilteredProducts = products;
    
  if (selectedFilters.categories || selectedFilters.priceRange) {
    const filteredByCategory = selectedFilters.categories
      ? products.filter(product => product.category === selectedFilters.categories)
      : products;

    const [min, max] = selectedFilters.priceRange?.replace(" $", "").split("-").map(Number) ?? [0, Infinity];
    currentFilteredProducts = filteredByCategory.filter(product => product.price >= min && product.price <= max);

    const filteredProductIDs = currentFilteredProducts.map(product => product.id);
    sessionStorage.setItem("filteredProductIDs", JSON.stringify(filteredProductIDs));
    setFilteredItems(filteredProductIDs);
  } else {
    clearFilteredItems();
  }

  setFilteredProducts(currentFilteredProducts);
}, [products, selectedFilters]);

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
