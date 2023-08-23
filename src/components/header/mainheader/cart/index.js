import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./cart.module.css";
import { iconDimensions } from "@/config";

export default function Cart({ image, price }) {
  return (
    <Link href="/cart">
      <span className={`${styles.Cart} ${styles.link}`}>
        <Image
          src={image}
          alt="icon-cart"
          width={iconDimensions().small}
          height={iconDimensions().small}
        />
        <span className={styles.price}>${price}</span>
      </span>
    </Link>
  );
}
