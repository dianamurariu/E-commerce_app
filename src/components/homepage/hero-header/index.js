import GridLayout from "../../layout/layout-grid";
import styles from "./hero-header.module.css";
import Title from "../../title";
import Button from "../../buttons/button";
import Image from "next/image";
import { iconDimensions } from "@/config";

export default function HeroHeader() {
  return (
    <div className={styles.wrapper__hero}>
      <div className="container">
        <GridLayout>
          <div className="left-side">
            <div className={styles.wrapper_title}>
              <Title level="h1" style="weight700">
                Your{" "}
                <strong className={styles.strongText}>dutch store, </strong>
                always closed.
              </Title>
            </div>

            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <a className={styles.link} href="#promoSection">
              <Button
                style="btnDark btnLarge text-white btnHover"
                text="Check out the deals"
                imgposition="left"
                imgsrc="images/percent.svg"
                imgwidth={iconDimensions().small}
                imgheight={iconDimensions().small}
              />
            </a>
          </div>
          <div className={styles.rightSide}>
            <Image
              src="images/Products.svg"
              alt="image"
              width={532}
              height={286}
            />
          </div>
        </GridLayout>
      </div>
    </div>
  );
}
