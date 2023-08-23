import { calculateFinalPrice } from "@/cartUtils";
import styles from "./cart-small.module.css";
import ItemSmall from "./item-small";

import { useCartContext } from "@/context/cartContext";

export default function CartSmall() {
  const { state } = useCartContext();
  const { cards } = state;

  const subtotal = calculateFinalPrice(cards);

  const shippingPrice = 4.9;

  const totalPrice = subtotal + shippingPrice;

  return (
    <div className={styles.wrapper_cart_small}>
      <div className={styles.wrapper_cart_items}>
        {cards.map((card) => {
          return <ItemSmall key={card.id} {...card} />;
        })}
      </div>
      <div className={styles.modal_footer}>
        <div className={styles.top}>
          <div className={styles.subtotal}>
            <p className={styles.subtotal_text}>Subtotal</p>
            <p className={styles.subtotal_price}>
              <span>${subtotal.toFixed(2)}</span>
            </p>
          </div>
          <div className={styles.shipping}>
            <p className={styles.shipping_text}>Shipping</p>
            <p className={styles.shipping_price}>
              <span>$</span> {shippingPrice.toFixed(2)}
            </p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.total_text}>Total</p>
          <p className={styles.total_price}>
            <span>$</span> {totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
