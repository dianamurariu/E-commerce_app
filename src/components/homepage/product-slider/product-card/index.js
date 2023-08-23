import Link from "next/link";
import styles from "./product-card.module.css";
import ButtonAdd from "@/components/buttons/button-add";

export default function ProductCard(props) {
  const { id, img, discount, title, originalPrice, currPrice } = props;

  return (
    <div className={styles.wrapper_card}>
      <div className={styles.card_top}>
        <img className={styles.card_image} src={img} alt="image" />
        {discount && <span className={styles.discount}>{discount}</span>}
        <hr className={styles.card_line} />
      </div>

      <div className={styles.card_body}>
        <Link href="/product-details" className={styles.card_title}>
          {title}
        </Link>

        <div className={styles.card_bottom}>
          <p className={styles.current_price}>
            <span className={styles.original_price}>
              <s>{originalPrice}</s>
            </span>
            <span className={styles.dollar}>$</span>
            <span>{currPrice}</span>
          </p>
          <ButtonAdd imgsrc="/images/plus-icon.svg" {...props} />
        </div>
      </div>
    </div>
  );
}
