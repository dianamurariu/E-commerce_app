import styles from "./cart.quantity.module.css";
import ButtonCart from "../../button-cart";

export default function CartQuantity({ setCount, count }) {
  const handleDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  };

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div className={styles.wrapper_cart}>
      <div className={styles.quantity}>
        <ButtonCart btnFunction="minus" onClick={handleDecrease} />
        <span className={styles.numberItems}>{count}x</span>
        <ButtonCart btnFunction="plus" onClick={handleIncrease} />
      </div>
    </div>
  );
}
