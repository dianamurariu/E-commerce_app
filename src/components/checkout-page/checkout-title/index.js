import Title from '@/components/title';
import styles from './checkout-title.module.css';
import Image from 'next/image';

export default function CheckoutTitle({title, imgsrc}) {
    return (
        <div className={styles.wrapper_title}>
            <Image src={imgsrc} width={20} height={20} alt="icon" />
            <Title level="h5" style="weight600">{title}</Title>
        </div>
    )
}