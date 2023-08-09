import Title from '@/components/title';
import styles from './text-banner.module.css';

export default function TextBanner ({categoryName, categoryHeading}) {
    return (
        <div className={styles.wrapper_text_banner}>
            <p className={styles.categoryName}>{categoryName}</p> 
            <div className={styles.wrapper_title}>
                <Title level="h3" style="weight700">{categoryHeading}</Title>
            </div>
        </div>

    )
}