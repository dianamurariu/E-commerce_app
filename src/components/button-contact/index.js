import styles from './button-contact.module.css';

export default function ButtonContact ( {type, text}) {
    return (
        <button type={type} className={styles.btnContact} >{text}</button>
    )
}