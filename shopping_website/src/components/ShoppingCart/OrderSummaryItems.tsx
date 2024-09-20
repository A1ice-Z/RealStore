import styles from "./OrderSummaryItems.module.css";
import { Product } from "../../models/Product";
import { getCart, CartItem } from "../../utils/sessionStorage";
import { useProducts } from "../../hooks/useProducts.ts";
import { useEffect, useState } from "react";
import ClothingsCards from "../Scrolling/ClothingsCards/ClothingsCards";

const OrderSummaryItems = () => {
    const cartItemData = getCart()
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const { data: products, isLoading, isError } = useProducts();
    const [emptyCart, setEmptyCart] = useState<boolean>(cartItemData.length === 0)

    useEffect(() => {
        if (!products) {
            return; 
        }
        const cartItemIds = cartItemData.map((cartId: CartItem) => {return cartId.productId})
        const cartItems = products.filter((product: Product) => cartItemIds.includes(product.id))
        setCartItems(cartItems)
    }, [products])

    useEffect(() => {
        setEmptyCart(cartItemData.length === 0)
    }, [])

    if (isLoading) {
        return <section role="status" aria-live="polite">Loading...</section>;
    }
    if (isError) {
        return <section  role="alert" aria-live="assertive">Error fetching products.</section>;
    }

    return (
        <>
            <section className={styles.itembox} role="region" aria-label="Order Summary Items">
            {emptyCart? 
                (<section className={styles.message} role="status" aria-live="polite">No products available.</section>) 
                : (cartItems.map((product: Product) => (
                        <ClothingsCards
                        key={product.id}
                        id={product.id}
                        title={product.title.substring(0, 20) + "..."}
                        price={product.price}
                        category={product.category.charAt(0).toUpperCase() + product.category.substring(1)}
                        image={product.image}
                        cart={true}
                        favorite={false}
                        />
                    )))
                }
            </section>
        </>
    )
}

export default OrderSummaryItems;