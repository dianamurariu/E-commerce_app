import styles from './button-submit.module.css';
import Image from 'next/image';

export default function ButtonSubmit ({text, imgsrc }) {
    return (
        <button type="submit" className={styles.ButtonSubmit}>
            {imgsrc && <Image src={imgsrc} alt="icon" width={16} height={16} />}
            {text}
        </button>
    )
}