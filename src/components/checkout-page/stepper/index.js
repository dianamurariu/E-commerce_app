import styles from './stepper.module.css';
import Link from 'next/link';

export default function Stepper({active}) {
    return (
        <div className={styles.wrapper_stepper}>
            <Link className={styles.link} href="/checkout/personal-details">
                <div className={active === 1 ? `${styles.stepper_item} ${styles.stepper_active}` : `${styles.stepper_item}`}>
                    <span>1</span>
                    <p>Personal Details</p>
                </div>
            </Link>

            <span className={styles.divider}></span>

            <Link className={styles.link} href="/checkout/delivery-details">
                <div className={active === 2 ? `${styles.stepper_item} ${styles.stepper_active}` : `${styles.stepper_item}`} >
                    <span>2</span>
                    <p>Delivery Details</p>
                </div>
            </Link>

            <span className={styles.divider}></span>

            <Link className={styles.link} href="/checkout/payment">
                <div className={active === 3 ? `${styles.stepper_item} ${styles.stepper_active}` : `${styles.stepper_item}`}>
                    <span>3</span>
                    <p>Payment</p>
                </div>
            </Link> 
        </div>
    )
}