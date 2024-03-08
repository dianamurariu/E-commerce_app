import styles from "./stepper.module.css";
import Step from "./step";

export default function Stepper({ active }) {
  return (
    <div className={styles.stepper}>
      <Step
        number="1"
        linkUrl="/checkout/personal-details"
        linkText="Personal Details"
        className={`${styles.stepper_item} ${
          active === 1 ? ` ${styles.stepper_active}` : ""
        }`}
      />

      <span className={styles.divider}></span>
      <Step
        number="2"
        linkUrl="/checkout/delivery-details"
        linkText="Delivery Details"
        className={`${styles.stepper_item} ${
          active === 2 ? ` ${styles.stepper_active}` : ""
        }`}
      />

      <span className={styles.divider}></span>
      <Step
        number="3"
        linkUrl="/checkout/payment"
        linkText="Payment"
        className={`${styles.stepper_item} ${
          active === 3 ? ` ${styles.stepper_active}` : ""
        }`}
      />
    </div>
  );
}
