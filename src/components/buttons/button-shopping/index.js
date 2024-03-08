import styles from "./button-shopping.module.css";
import Link from "next/link";
import Image from "next/image";
import { iconDimensions } from "@/config";

export default function ButtonShopping({ text }) {
  return (
    <Link className={styles.link} href="/product-listing">
      <button className={styles.btnShopping}>
        <Image
          src="/images/arrow-right-shop.svg"
          alt="icon"
          width={iconDimensions().small}
          height={iconDimensions().small}
        />
        {text}
      </button>
    </Link>
  );
}
