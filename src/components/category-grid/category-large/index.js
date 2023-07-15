import Button from "@/components/button";
import styles from './category-large.module.css';

export default function CategoryLarge({text, btnText}) {
    return (
        <div className={styles.category_large}>

            <p className={styles.category_large_text}>{text}</p>
            <Button style="btnTransparent btnLink text-white" text={btnText} 
            imgposition="right" imgsrc="images/arrow-right.svg" imgwidth={20} imgheight={20} alt="arrow"/>

        </div>
    )
}