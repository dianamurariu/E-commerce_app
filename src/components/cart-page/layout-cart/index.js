import styles from './layout-cart.module.css';

export default function LayoutCart({children}) {
    return (
        <div className='container'>
            <div className={styles.layoutCart}>
                {children}
            </div>
        </div>
    )
}