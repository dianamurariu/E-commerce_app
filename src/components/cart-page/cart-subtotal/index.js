import styles from './cart-subtotal.module.css';

export default function CartSubtotal ({title, subtotal}) {

    return (
        <div className={styles.wrapper_subtotal}>
            <h3 className={styles.subtotal_title}>{title}</h3>
            <span className={styles.subtotal_price}>
                ${subtotal}
            </span>
        </div>
    )
}