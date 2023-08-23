import Button from "@/components/buttons/button";
import styles from "./category-small.module.css";
import { iconDimensions } from "@/config";

export default function CategorySmall({ text, btnDark, btnText }) {
  return (
    <div className={styles.category_small}>
      <p className={styles.category_small_text}>{text}</p>
      {btnDark ? (
        <Button
          style="btnDark btnRegular text-white btnHover"
          text={btnText}
          imgposition="right"
          imgsrc="images/arrow-right.svg"
          imgwidth={iconDimensions().small}
          imgheight={iconDimensions().small}
          alt="icon-arrow"
        />
      ) : (
        <div className={styles.btnTransparent}>
          <Button
            style="btnTransparent btnLink text-black btnHover"
            text={btnText}
            imgposition="right"
            imgsrc="images/arrow-right-black.svg"
            imgwidth={iconDimensions().small}
            imgheight={iconDimensions().small}
            alt="icon-arrow"
          />
        </div>
      )}
    </div>
  );
}
