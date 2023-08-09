import styles from './item-small.module.css';
import Title from '@/components/title';
import CartQuantity from '@/components/cart-page/cart-item/cart-quantity';
import ButtonDelete from '@/components/buttons/button-delete';

import { useState, useEffect } from 'react';
import { useCartContext, cardActionType } from '@/context/cartContext';


export default function ItemSmall (props) {
  const { id, img, title, currPrice } = props;

  const { state, dispatch } = useCartContext();
  const totalCount = state.totalCount;
  const [count, setCount] = useState(totalCount);
  const [total, setTotal] = useState(currPrice);
  

  useEffect(() => {
    const finalTotal = parseFloat((count * parseFloat(currPrice)).toFixed(2));
    setTotal(finalTotal);

    const items = state.cards.map((card) => {
      return {
        ...card,
        totalPrice: id === card.id ? finalTotal : card.totalPrice,
      };
    });

    dispatch({ type: cardActionType.UPDATE_CARDS, payload: items });

    const finalPrice = state.cards.reduce((acc, curr) => {
      return acc + parseFloat(curr.totalPrice);
    }, 0);

    dispatch({ type: cardActionType.SET_TOTAL_PRICE, payload: finalPrice });

    const totalCount = count;

    dispatch({ type: cardActionType.SET_TOTAL_COUNT, payload: totalCount });
  }, [count]);

  return (
    <div className={styles.item_small}>
      <div className={styles.wrapper_title_quantity}>
        <Title level="h6" style="weight400">
          {title}
          {id}
        </Title>
        <CartQuantity setCount={setCount} count={count} />
      </div>

      <div className={styles.wrapper_delete_price}>
        <ButtonDelete {...props} />
        <p className={styles.price}>
          <span className={styles.currency}>$ </span>
          {total}
        </p>
      </div>
    </div>
  );
}