import styles from './link-section.module.css';
import Link from 'next/link';

export default function LinkSection({ title, subtitle, link }) {
    return (
      <div className="LinkSection" href="#">
        <h3 className={styles.title}>{title}</h3>
        <h5 className={styles.subtitle}>{subtitle}</h5>
        <ul>
          <li className={styles.listItem}><Link className={styles.link} href="#">{link}</Link></li>
          <li className={styles.listItem}><Link className={styles.link} href="#">{link}</Link></li>
          <li className={styles.listItem}><Link className={styles.link} href="#">{link}</Link></li>
        </ul>

      </div>
    );
}