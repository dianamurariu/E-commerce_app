import React, { useEffect } from "react";
import LayoutCart from "../layout-cart";
import CartItem from "../cart-item";
import CartHeader from "../cart-header";
import CartSubtotal from "../cart-subtotal";
import ButtonCheckout from "@/components/buttons/button-checkout";
import styles from "./cart-wrapper.module.css";

import { useCartContext } from "@/context/cartContext";
import { calcPrice } from "@/cartUtils";

export default function CartWrapper() {
  const { state, dispatch } = useCartContext();
  const { cards } = state;

  useEffect(() => {
    calcPrice(state.cards, dispatch);
  }, [cards]);

  return (
    <LayoutCart>
      <div className={styles.wrapper_container_cart}>
        <div className={styles.wrapper_cart_top}>
          <CartHeader
            title="Items in your cart"
            imgsrc="/images/shopping-cart-gray.svg"
          />
          <CartSubtotal
            title="Cart Subtotal"
            subtotal={state.totalPrice.toFixed(2)}
          />
        </div>

        <div className={styles.wrapper_cart_body}>
          {cards.map((card) => {
            return <CartItem key={card.id} {...card} />;
          })}
        </div>

        <div className={styles.wrapper_cart_bottom}>
          <ButtonCheckout text="Proceed to checkout" />
        </div>
      </div>
    </LayoutCart>
  );
}
