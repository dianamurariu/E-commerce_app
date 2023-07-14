import GridLayout from "../grid-layout";
import styles from './hero-header.module.css';
import Title from "../title";
import Button from "../button";

export default function HeroHeader() {
    return (
        <div className={styles.wrapper__hero}>
            <div className="container">
                <GridLayout>
                <div className="left-side">
                    <Title level={1}>Your <strong className={styles.strongText}>dutch store, </strong>always closed.</Title>
                    <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button style="btnDark btnLarge text-white" text="Check out the deals" 
                    imgposition="left" imgsrc="images/percent.svg" imgwidth={16} imgheight={16}  />
                </div>

                    <div className={styles.rightSide}>
                        <img src="images/Products.svg" />
                    </div>

                </GridLayout>

            </div>

        </div>
    )
}


{/* <Title level = {2} text="YAY! KING'S DAY!" />
<Title level = {3} text="Explore the items you'll love"/>
<Title level = {4} preText="Grab a" boldText="treat basket" postText=" for a special occasion"/> */}

{/* <Button style="light__black" size="regular" text= "Check out" icon="images/arrow-right.svg" left={true} /> */}
{/* <Button style="btnDark btnLarge" text="Check out the deals" iconLeft="images/percent.svg" /> */}