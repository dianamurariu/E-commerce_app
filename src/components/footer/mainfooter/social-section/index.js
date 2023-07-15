import User from "@/components/header/mainheader/user";
import styles from './social-section.module.css';

export default function SocialSection ({heading, subheading}) {
    return (
        <div className="SocialSection">
            <h3 className={styles.heading}>{heading}</h3>
            <h5 className={styles.subheading}>{subheading}</h5>
            <div className={styles.SocialIcons}>
                <User className={styles.instagramIcon} link="#" image="/images/instagram-icon.svg" alt="image"/>
                <User className={styles.mailIcon} link="#" image="/images/mail-icon.svg" alt="image"/>
                <User className={styles.mailIcon} link="#" image="/images/mail-icon.svg" alt="image"/>
                <User className={styles.mailIcon} link="#" image="/images/mail-icon.svg" alt="image"/>
                <User className={styles.mailIcon} link="#" image="/images/mail-icon.svg" alt="image"/>
            </div>
        </div>
    )
}