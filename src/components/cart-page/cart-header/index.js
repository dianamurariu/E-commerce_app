import styles from './cart-header.module.css';
import Title from '@/components/title';
import Image from 'next/image';
import ButtonCheckout from '@/components/buttons/button-checkout';

export default function CartHeader ({title, imgsrc}) {
    return (

        <div className={styles.wrapper_cart_header}>
                <div className={styles.wrapper_title}>
                    <Image src={imgsrc} alt="image" width={24} height={24} />
                    <Title level="h3" style="weight600">{title}</Title>
                </div>
                <div className={styles.wrapper_button}>
                    <ButtonCheckout text="Proceed to checkout" />
                </div>
            </div>

    )
}