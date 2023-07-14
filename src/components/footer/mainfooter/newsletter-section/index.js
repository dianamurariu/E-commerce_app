import Search from "@/components/header/mainheader/search"
import styles from './newsletter-section.module.css'

export default function Newsletter ( { heading, subheading}) {
    return (
        <div className="Newletter">
            <h3 className={styles.heading}>{heading}</h3>
            <h5 className={styles.subheading}>{subheading}</h5>
            <Search className={styles.SearchNewsletter} placeholder="Enter your e-mail address" />
        </div>
    )

}