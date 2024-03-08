import styles from "./notification.module.css";

export default function Notification({ firstPart, secondPart }) {
  return (
    <p>
      <strong className={styles.strongText}>{firstPart}</strong> {secondPart}
    </p>
  );
}
