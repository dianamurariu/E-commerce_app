import styles from "./button-details.module.css";

export default function ButtonDetails({ children, className }) {
  return (
    <button className={`${styles.btnDetails} ${className}`}>{children}</button>
  );
}
