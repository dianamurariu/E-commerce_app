import Image from "next/image";
import styles from './notification-component.module.css';

export default function NotificationComponent({imgsrc, text}) {
    return (
        <div className={styles.quick_reply_msg}>
            <Image src={imgsrc} alt="icon" width={32} height={32} />
            <p >{text}</p>
        </div>
    )
}