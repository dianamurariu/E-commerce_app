import styles from './email.module.css';

export default function Email({ mail }) {
    return (
        <a className={styles.mailLink} href={`mailto:${mail}`}>{mail}</a>
    );
}

