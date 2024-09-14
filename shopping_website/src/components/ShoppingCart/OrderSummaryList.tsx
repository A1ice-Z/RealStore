
import { useState } from "react";
import styles from "./OrderSummaryList.module.css";

interface OrderSummaryListProps {
    price: number;
}

const OrderSummaryList = () => {
    const [clicked, setClicked] = useState(false);

    function handleChange(e: any) {
        let isChecked = e.target.checked;
        setClicked(isChecked);
    }

    function handleClick() {
        console.log("click");
    }

    return (
        <>
            <section className={styles.box}>
                <h2 className={styles.title}>ORDER SUMMARY</h2>
                <div className={styles.textbox}>
                    <span className={styles.text}>Subtotal</span>
                    <span className={styles.text}>$ 100.00</span>
                </div>
                <div className={styles.textbox}>
                    <span className={styles.text}>Shipping</span>
                    <span className={styles.text}>Free</span>
                </div>
                <div className={styles.totalbox}>
                    <span className={styles.totaltext}>TOTAL</span>
                    <span className={styles.taxtext}>(TAX INCL.)</span>
                    <span className={styles.totaltext}>$ 100.00</span>
                </div>
                <label className={styles.checkbox}>
                    <input type="checkbox" onChange={e => handleChange(e)} />
                    <span className={styles.checkboxtext}>I agree to the Terms and Conditions</span>
                </label>
                <button type="button" disabled={!clicked} className={styles.button} onClick={() => handleClick()}>PAY</button>
            </section>
        </>
    );
}

export default OrderSummaryList;