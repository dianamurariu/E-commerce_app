import styles from './layout-checkout.module.css';

export default function LayoutCheckout( {children} ) {
    return (
        <div className='container'>
            <div className={styles.layoutCheckout}>
                {children}
            </div>
        </div>
    )
}