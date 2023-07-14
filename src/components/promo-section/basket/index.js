import Title from '@/components/title';
import styles from './basket.module.css';
import Image from 'next/image';
import ButtonAdd from '@/components/button-add';

export default function Basket({ imgstyle, text, price, price_decimal}) {
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
                    <ButtonAdd btncolor="light" />
                </div>
                
            </div>



            <div className={styles.description_basket}>
                <Title level={6}>{text}</Title>
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
