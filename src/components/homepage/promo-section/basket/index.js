import Title from '@/components/title';
import styles from './basket.module.css';
import Image from 'next/image';
import ButtonAddCategory from '@/components/buttons/button-add-category';

export default function Basket({imgstyle, text, price, price_decimal}) {
    return (
        <div className={styles.wrapper_basket}>

            <div className={styles.image_basket}>
                {imgstyle === "dark" && (
                    <Image src="/images/Basket-Items-dark.svg" width={230} height={132} alt="basket" />
                )}
                {imgstyle === "light" && (
                    <Image src="/images/Basket-Items-light.svg" width={230} height={132} alt="basket" />
                )}
                <div className={styles.container_button}>
                    <ButtonAddCategory  />
                </div>      
            </div>

            <div className={styles.description_basket}>
                <div className={styles.wrapper_title}>
                    <Title level="h4" style="weight400">{text}</Title>
                </div>
                <div className={styles.divider} />
                <p className={styles.price}>
                    <span>{price}
                        <sup>{price_decimal}</sup>
                    </span>
                </p>
            </div>
        </div>
    )
}
