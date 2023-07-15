import GridLayout from "../grid-layout";
import styles from './hero-header.module.css';
import Title from "../title";
import Button from "../button";
import Image from "next/image";

export default function HeroHeader() {
    return (
        <div className={styles.wrapper__hero}>
            <div className="container">
                <GridLayout>
                <div className="left-side">
                    <Title level={1}>Your<strong className={styles.strongText}>dutch store, </strong>always closed.</Title>
                    <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button style="btnDark btnLarge text-white" text="Check out the deals" 
                    imgposition="left" imgsrc="images/percent.svg" imgwidth={16} imgheight={16}  />
                </div>
                <div className={styles.rightSide}>
                    <Image src="images/Products.svg" width={532} height={286} />
                </div>
                </GridLayout>
            </div>
        </div>
    )
}
