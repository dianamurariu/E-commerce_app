import styles from "./payment-form.module.css";
import CheckoutTitle from "../../checkout-title";
import PaymentFormStack from "../payment-form-stack";

export default function PaymentForm() {
  return (
    <div className={styles.payment_form}>
      <div className={styles.wrapper_title}>
        <CheckoutTitle
          title="Payment method"
          imgsrc="/images/credit-card.svg"
        />
        <span>1/2</span>
      </div>

      <PaymentFormStack />
      <div className={styles.accepted_cards}>
        <p>We accept these cards:</p>
        <div className={styles.wrapper_cards}>
          <div className={styles.card} />
          <div className={styles.card} />
          <div className={styles.card} />
        </div>
      </div>
    </div>
  );
}
