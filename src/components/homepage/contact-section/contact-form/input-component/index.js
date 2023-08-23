import styles from "./input-component.module.css";

export default function InputComponent({ type, className, placeholder }) {
  return (
    <input
      type={type}
      className={`${styles.input} ${className}`}
      placeholder={placeholder}
    />
  );
}
