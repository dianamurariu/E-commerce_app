import styles from './button-submit.module.css';

export default function ButtonSubmit ({text }) {
    return (
        <>
        <button type="submit" className={styles.ButtonSubmit}>{text}</button>
        </>
    )
}