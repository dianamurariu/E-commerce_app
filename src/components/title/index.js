import styles from './title.module.css';

export default function Title({ level=2, children }) {

    return (
        <>
            {level === 1 &&
                <h1 className={styles.level1}>{children}</h1>}
            {level === 2 &&
                <h2 className={styles.level2}>{children}</h2>}
            {level === 3 &&
                <h2 className={styles.level3}>{children}</h2>}
            {level === 4 &&
                <h3 className={styles.level4}>{children}</h3>}
            {level === 5 &&
                <h3 className={styles.level5}>{children}</h3>}
            {level === 6 &&
                <h3 className={styles.level6}>{children}</h3>}
            {level === 7 &&
                <h3 className={styles.level7}>{children}</h3>}
        </>
    );
}

