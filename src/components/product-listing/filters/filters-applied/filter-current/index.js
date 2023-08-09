import styles from "./filter-current.module.css";
import Link from "next/link";
import Image from "next/image";

export default function CurrentFilter({ text }) {
  return (
    <Link className={styles.current_filter} href="#">
      {text}
      <Image className={styles.checked} src="/images/filter-check-icon.svg" width={16} height={16} alt="img" />
      <Image className={styles.delete} src="/images/filter-delete-icon.svg" width={16} height={16} alt="img" />
    </Link>
  );
}