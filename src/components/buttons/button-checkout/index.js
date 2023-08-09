import styles from './button-checkout.module.css';
import Link from 'next/link';

export default function ButtonCheckout ({text}) {
    return (
        <>
            <Link className={styles.link} href="/checkout/personal-details" >
                <button className={styles.btnCheckout} type="button">{text}</button>
            </Link>
        </>
    )
}