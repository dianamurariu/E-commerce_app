import Button from "@/components/buttons/button";
import styles from "./category-large.module.css";
import { iconDimensions } from "@/config";

export default function CategoryLarge({ text, btnText }) {
  return (
    <div className={styles.category_large}>
      <p className={styles.category_large_text}>{text}</p>
      <Button
        style="btnTransparent btnLink text-white btnHover"
        text={btnText}
        imgposition="right"
        imgsrc="images/arrow-right.svg"
        imgwidth={iconDimensions().extraMedium}
        imgheight={iconDimensions().extraMedium}
        alt="icon-arrow"
      />
    </div>
  );
}
