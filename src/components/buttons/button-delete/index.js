import React, { useEffect } from "react";
import styles from "./button-delete.module.css";
import { iconDimensions } from "@/config";
import Image from "next/image";
import { useCartContext, cardActionType } from "@/context/cartContext";
import { calcPrice } from "@/cartUtils";

export default function ButtonDelete({ id }) {
  const { state, dispatch } = useCartContext();

  useEffect(() => {
    calcPrice(state.cards, dispatch);
  }, [state.cards]);

  const handleDelete = (id) => () => {
    const items = state.cards.filter((card) => {
      return card.id !== id;
    });
    dispatch({ type: cardActionType.UPDATE_CARDS, payload: items });
  };

  return (
    <button
      type="button"
      className={styles.btn_delete}
      onClick={handleDelete(id)}
    >
      <Image
        src="/images/Delete-Product.svg"
        width={iconDimensions().medium}
        height={iconDimensions().medium}
        alt="icon-delete"
      />
    </button>
  );
}
