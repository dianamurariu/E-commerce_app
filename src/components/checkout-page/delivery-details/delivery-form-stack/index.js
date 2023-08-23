import React, { useState } from "react";
import styles from "./delivery-form-stack.module.css";

export default function DeliveryFormStack() {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };

  return (
    <form className={styles.form_delivery_details}>
      <div
        className={`${styles.radio_btn} ${
          selectedOption === 1 ? styles.selected : ""
        }`}
        onClick={() => handleOptionClick(1)}
      >
        <div className={styles.labels}>
          <label>4.00€ — Standard delivery</label>
          <p>Delivered before Saturday 27th</p>
        </div>
        <input
          type="radio"
          checked={selectedOption === 1}
          onChange={() => handleOptionClick(1)}
        />
      </div>
      <div
        className={`${styles.radio_btn} ${
          selectedOption === 2 ? styles.selected : ""
        }`}
        onClick={() => handleOptionClick(2)}
      >
        <div className={styles.labels}>
          <label>4.00€ — Standard delivery</label>
          <p>Delivered before Saturday 27th</p>
        </div>
        <input
          type="radio"
          checked={selectedOption === 2}
          onChange={() => handleOptionClick(2)}
        />
      </div>
      <div
        className={`${styles.radio_btn} ${
          selectedOption === 3 ? styles.selected : ""
        }`}
        onClick={() => handleOptionClick(3)}
      >
        <div className={styles.labels}>
          <label>4.00€ — Standard delivery</label>
          <p>Delivered before Saturday 27th</p>
        </div>
        <input
          type="radio"
          checked={selectedOption === 3}
          onChange={() => handleOptionClick(3)}
        />
      </div>
      <div
        className={`${styles.radio_btn} ${
          selectedOption === 4 ? styles.selected : ""
        }`}
        onClick={() => handleOptionClick(4)}
      >
        <div className={styles.labels}>
          <label>4.00€ — Standard delivery</label>
          <p>Delivered before Saturday 27th</p>
        </div>
        <input
          type="radio"
          checked={selectedOption === 4}
          onChange={() => handleOptionClick(4)}
        />
      </div>
    </form>
  );
}
