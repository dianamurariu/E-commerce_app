import styles from './button-contact.module.css';

export default function ButtonContact ( {type, text, className}) {
    return (
        <button type={type} className={`${className} ${styles.btnContact}`}>{text}</button>
    )
}