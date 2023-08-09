import TitleDetails from '../title-details';
import styles from './product-info.module.css';

export default function ProductInfo({titleDesc, desc, descList, titleChar, char}) {
    return (
        <div className={styles.wrapper_details}>
            <div className={styles.description}>
                <TitleDetails level="h2">{titleDesc}</TitleDetails>
                <p className={styles.text}>{desc}</p>
                <ul>
                    <li className={styles.text}>{descList}</li>
                    <li className={styles.text}>{descList}</li>
                    <li className={styles.text}>{descList}</li>
                </ul>

            </div>
            <div className={styles.characteristics}>
                <TitleDetails level="h2">{titleChar}</TitleDetails>
                <ul className={styles.listChar}>
                    <span className={styles.text}><input className={styles.checkbox} type="checkbox" />{char}</span>
                    <span className={styles.text}><input className={styles.checkbox} type="checkbox" />{char}</span>
                    <span className={styles.text}><input className={styles.checkbox} type="checkbox" />{char}</span>
                </ul>
            </div>
        </div>
    )
}