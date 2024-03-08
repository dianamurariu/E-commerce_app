import styles from "./filter-current.module.css";
import Link from "next/link";
import Image from "next/image";
import { iconDimensions } from "@/config";

export default function CurrentFilter({ text }) {
  return (
    <Link className={styles.current_filter} href="#">
      {text}
      <Image
        className={styles.checked}
        src="/images/filter-check-icon.svg"
        width={iconDimensions().small}
        height={iconDimensions().small}
        alt="icon"
      />
      <Image
        className={styles.delete}
        src="/images/filter-delete-icon.svg"
        width={iconDimensions().small}
        height={iconDimensions().small}
        alt="icon"
      />
    </Link>
  );
}
