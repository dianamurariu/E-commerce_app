import styles from "./button-cart.module.css";
import Image from "next/image";
import { iconDimensions } from "@/config";

export default function ButtonCart({ btnFunction, onClick }) {
  return (
    <button className={styles.btnCart} onClick={onClick}>
      {btnFunction === "plus" ? (
        <Image
          src="/images/Plus-Icon-Cart.svg"
          alt="icon-plus"
          width={iconDimensions().small}
          height={iconDimensions().small}
        />
      ) : (
        <Image
          src="/images/Minus-Icon-Cart.svg"
          alt="icon-minus"
          width={iconDimensions().small}
          height={iconDimensions().small}
        />
      )}
    </button>
  );
}
