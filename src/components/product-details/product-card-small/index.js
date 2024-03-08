import styles from "./product-card-small.module.css";
import ButtonAdd from "@/components/buttons/button-add";
import Image from "next/image";

export default function ProductCardSmall(props) {
  const { imgSrc, currPrice } = props;
  const IconSize = 56;

  return (
    <div className={styles.wrapper_card}>
      <div className={styles.wrapper_image}>
        <Image src={imgSrc} alt="image" width={IconSize} height={IconSize} />
      </div>
      <div className={styles.card_bottom}>
        <span className={styles.price}>{currPrice}</span>
        <ButtonAdd imgsrc="/images/plus-icon.svg" {...props} />
      </div>
    </div>
  );
}
