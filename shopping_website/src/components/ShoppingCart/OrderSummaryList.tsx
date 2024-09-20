
import { useEffect, useState } from "react";
import styles from "./OrderSummaryList.module.css";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../models/Product";
import {getCart , clearCart} from "../../utils/sessionStorage";
import { useNavigate } from "react-router-dom";

const OrderSummaryList = () => {
    const [clicked, setClicked] = useState(false);
    const cartItemData = getCart()
    const [price, setPrice] = useState<number>();
    const { data: products, isLoading, isError } = useProducts();
    const navigate = useNavigate()

    useEffect(() => {
        if (!products) {
            return; 
        }
        const cartItemIds = cartItemData.map((cartId) => {return cartId.productId})
        const currentPrice = products.filter((product: Product) => cartItemIds.includes(product.id)).map((product: Product) => product.price).reduce((x,y) => x = x + y, 0)
        setPrice(currentPrice)
    }, [products])

    if (isLoading) {
      return <section>Loading...</section>;
    }
    if (isError) {
      return <section>Error fetching products.</section>;
    }

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const isChecked = e.target.checked;
        setClicked(isChecked);
    }

    function handleClick() {
        if (cartItemData) {
            clearCart()
            navigate(0)
        }
    }

    return (
        <>
            <section className={styles.box}>
                <h2 className={styles.title}>ORDER SUMMARY</h2>
                <div className={styles.textbox}>
                    <p className={styles.text}>Subtotal</p>
                    <p className={styles.text}>$ {price}</p>
                </div>
                <div className={styles.textbox}>
                    <p className={styles.text}>Shipping</p>
                    <p className={styles.text}>$ Free</p>
                </div>
                <div className={styles.totalbox}>
                    <p className={styles.totaltext}>TOTAL</p>
                    <p className={styles.taxtext}>(TAX INCL.)</p>
                    <p className={styles.totaltext}>$ {price}</p>
                </div>
                <label className={styles.checkbox}>
                    <input type="checkbox" onChange={e => handleChange(e)} />
                    <p className={styles.checkboxtext}>I agree to the Terms and Conditions</p>
                </label>
                <button type="button" disabled={!clicked} className={styles.button} onClick={() => handleClick()}>PAY</button>
            </section>
        </>
    );
}

export default OrderSummaryList;