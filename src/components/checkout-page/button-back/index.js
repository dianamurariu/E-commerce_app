import styles from './button-back.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function ButtonBack({href, hrefName}) {
    return (
        <>
        <div className={styles.wrapper_button}>
        <Link className={styles.link} href ={href}>
            <button type="button" className={styles.btnBack}>
                <Image src="/images/arrow-right-shop.svg" width={16} height={16} alt="icon" />
                Back to {hrefName}
            </button>
        </Link>  
        </div>

        <div className={styles.divider} />  

        </>
        
    )
}