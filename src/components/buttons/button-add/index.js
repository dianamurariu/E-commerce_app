import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./button-add.module.css";
import { useCartContext, cardActionType } from "@/context/cartContext";
import { calcPrice } from "@/cartUtils";
import { iconDimensions } from "@/config";

export default function ButtonAdd(props) {
  const context = useCartContext();
  const { id, imgsrc } = props;
  const { state, dispatch } = context;

  useEffect(() => {
    calcPrice(state.cards, dispatch);
  }, [state.cards]);

  const handleClick = (e) => {
    e.preventDefault();
    const item = state.cards.find((card) => {
      return card.id === id;
    });
    if (item === undefined) {
      dispatch({
        type: cardActionType.ADD_TO_CART,
        payload: { ...props, totalPrice: props.currPrice },
      });

      calcPrice(state.cards, dispatch);
    }
  };

  return (
    <Link className={styles.button_add} href="#" onClick={handleClick}>
      <Image
        src={imgsrc}
        width={iconDimensions().small}
        height={iconDimensions().small}
        alt="icon-plus"
      />
    </Link>
  );
}
