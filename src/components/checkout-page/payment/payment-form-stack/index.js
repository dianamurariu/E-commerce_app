import React, { useState, useEffect } from "react";
import styles from "./payment-form-stack.module.css";

export default function PaymentFormStack() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event, index) => {
    setSelectedOption(index);
    if (event.target.checked) {
      window.location.href = `/checkout/payment/card-details`;
    }
  };

  return (
    <form className={styles.form_payment}>
      <div
        className={`${styles.radio_btn} ${
          selectedOption === 1 ? styles.selected : ""
        }`}
      >
        <div className={styles.labels}>
          <img src="/images/credit-card.svg" alt="icon" />
          <label>Card</label>
        </div>
        <input
          type="radio"
          checked={selectedOption === 1}
          name="paymentOption"
          onChange={(event) => handleOptionChange(event, 1)}
        />
      </div>
      <div
        className={`${styles.radio_btn} ${
          selectedOption === 2 ? styles.selected : ""
        }`}
      >
        <div className={styles.labels}>
          <img src="/images/PayPal logo.svg" alt="icon" />
          <label>PayPal</label>
        </div>
        <input
          type="radio"
          checked={selectedOption === 2}
          name="paymentOption"
          onChange={(event) => handleOptionChange(event, 2)}
        />
      </div>
      <div
        className={`${styles.radio_btn} ${
          selectedOption === 3 ? styles.selected : ""
        }`}
      >
        <div className={styles.labels}>
          <img src="/images/Apple Logo.svg" alt="icon" />
          <label>Apple Pay</label>
        </div>
        <input
          type="radio"
          checked={selectedOption === 3}
          name="paymentOption"
          onChange={(event) => handleOptionChange(event, 3)}
        />
      </div>
      <div
        className={`${styles.radio_btn} ${
          selectedOption === 4 ? styles.selected : ""
        }`}
      >
        <div className={styles.labels}>
          <img src="/images/Google-Icon.svg" alt="icon" />
          <label>Google Pay</label>
        </div>
        <input
          type="radio"
          checked={selectedOption === 4}
          name="paymentOption"
          onChange={(event) => handleOptionChange(event, 4)}
        />
      </div>
    </form>
  );
}
