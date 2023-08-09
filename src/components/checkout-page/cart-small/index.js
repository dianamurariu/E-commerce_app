import styles from './cart-small.module.css';
import ItemSmall from './item-small';

import { useCartContext, cardActionType } from '@/context/cartContext';

export default function CartSmall() {
  const { state, dispatch } = useCartContext();
  const { cards } = state;

  // Calculate the subtotal
  const subtotal = cards.reduce((acc, card) => acc + parseFloat(card.totalPrice), 0);

  // Define the shipping price
  const shippingPrice = 4.90;

  // Calculate the total price (subtotal + shipping)
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
