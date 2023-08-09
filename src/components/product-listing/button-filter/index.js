
import styles from './button-filter.module.css';

export default function ButtonFilter({option, className}) {
    return (
        <button className={`${className} ${styles.btn}`} type="button">{option} </button>
    )
}

