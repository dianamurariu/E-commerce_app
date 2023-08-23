import styles from "./hero-header-small.module.css";
import ButtonShopping from "../buttons/button-shopping";
import Image from "next/image";

export default function HeroHeaderSmall() {
  return (
    <>
      <div className={styles.wrapper_hero_small}>
        <div className={styles.wrapper_button}>
          <ButtonShopping text="Continue shopping" />
        </div>
        <div className={styles.wrapper_image}>
          <Image
            src="/images/Image-Hero-Small.svg"
            alt="image"
            width={139}
            height={139}
          />
        </div>
      </div>
      <div className={styles.divider} />
    </>
  );
}
