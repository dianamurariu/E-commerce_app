import React, { useState, useEffect } from "react";
import Title from "@/components/title";
import ButtonDelete from "@/components/buttons/button-delete";
import CartQuantity from "./cart-quantity";
import styles from "./cart-item.module.css";
import { iconDimensions } from "@/config";

import { useCartContext, cardActionType } from "@/context/cartContext";
import { calcPrice, calculateTotal, updateCartItems } from "@/cartUtils";

export default function CartItem(props) {
  const { id, img, title, currPrice } = props;

  const [total, setTotal] = useState(currPrice);
  const { state, dispatch } = useCartContext();
  const totalCount = state.totalCount;

  const [count, setCount] = useState(totalCount);

  useEffect(() => {
    const finalTotal = calculateTotal(count, currPrice);
    setTotal(finalTotal);

    updateCartItems(dispatch, state.cards, id, finalTotal);
    calcPrice(state.cards, dispatch);

    dispatch({ type: cardActionType.SET_TOTAL_COUNT, payload: count });
  }, [count]);

  console.log("totalcount:", totalCount);

  return (
    <>
      <div className={styles.wrapper_cart}>
        <div className={styles.wrapper_image}>
          <img
            src={img}
            width={iconDimensions().large}
            height={iconDimensions().large}
            alt="icon"
          />
        </div>

        <div className={styles.wrapper_info}>
          <div className={styles.wrapper_info_up}>
            <div className={styles.wrapper_title}>
              <Title level="h4" style="weight400">
                {title} {id}
              </Title>
            </div>
            <ButtonDelete {...props} />
          </div>

          <div className={styles.wrapper_info_down}>
            <CartQuantity setCount={setCount} count={count} />
            <div className={styles.item_price}>${Number(total).toFixed(2)}</div>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
    </>
  );
}
