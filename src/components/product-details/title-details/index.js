import styles from './details-title.module.css';

export default function TitleDetails({children, level=2}) {
    return (
        <>
            {level === "h1" && <h1 className={styles.title}>{children}</h1>}
            {level === "h2" && <h2 className={styles.title}>{children}</h2>}
            {level === "h3" && <h2 className={`${styles.title} ${styles.h3}`}>{children}</h2>}
        </>
    )

}