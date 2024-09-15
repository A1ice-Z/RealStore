
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
                    <p className={styles.text}>Subtotal</p>
                    <p className={styles.text}>$ 100.00</p>
                </div>
                <div className={styles.textbox}>
                    <p className={styles.text}>Shipping</p>
                    <p className={styles.text}>Free</p>
                </div>
                <div className={styles.totalbox}>
                    <p className={styles.totaltext}>TOTAL</p>
                    <p className={styles.taxtext}>(TAX INCL.)</p>
                    <p className={styles.totaltext}>$ 100.00</p>
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