import React, { useState, useEffect } from "react";
import styles from "./item-small.module.css";
import Title from "@/components/title";
import CartQuantity from "@/components/cart-page/cart-item/cart-quantity";
import ButtonDelete from "@/components/buttons/button-delete";

import { useCartContext, cardActionType } from "@/context/cartContext";
import { calcPrice, calculateTotal, updateCartItems } from "@/cartUtils";

export default function ItemSmall(props) {
  const { id, img, title, currPrice } = props;

  const { state, dispatch } = useCartContext();
  const totalCount = state.totalCount;
  const [count, setCount] = useState(totalCount);
  const [total, setTotal] = useState(currPrice);

  useEffect(() => {
    const finalTotal = calculateTotal(count, currPrice);
    setTotal(finalTotal);

    updateCartItems(dispatch, state.cards, id, finalTotal); // Just call the function

    calcPrice(state.cards, dispatch);

    dispatch({ type: cardActionType.SET_TOTAL_COUNT, payload: totalCount });
  }, [count]);

  return (
    <div className={styles.item_small}>
      <div className={styles.wrapper_title_quantity}>
        <Title level="h6" style="weight400"> {title} {id}</Title>
        <CartQuantity setCount={setCount} count={count} imgsrc={img} />
      </div>

      <div className={styles.wrapper_delete_price}>
        <ButtonDelete {...props} />
        <p className={styles.price}>
          <span className={styles.currency}>$ </span>
          {Number(total).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
