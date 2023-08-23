import React, { useState } from "react";
import styles from "./tabs.module.css";
import SignInHeader from "../sign-in/sign-in-header";
import SignInForm from "../sign-in/sign-in-form";
import PersonalDetailsForm from "../checkout-guest/personal-details-form";
import CheckoutTitle from "../checkout-title";

export default function Tabs() {
  const [activeIndex, setActiveIndex] = useState(2);
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) =>
    activeIndex === index ? className : "";

  return (
    <div className={styles.checkout_tabs}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${checkActive(1, styles.active)}`}
          onClick={() => handleClick(1)}
        >
          Checkout as guest
        </button>
        <button
          className={`${styles.tab} ${checkActive(2, styles.active)}`}
          onClick={() => handleClick(2)}
        >
          Sign into your account
        </button>
      </div>

      <div className={styles.panels}>
        <div className={`${styles.panel} ${checkActive(1, styles.active)}`}>
          <div className={styles.wrapper_panel_1}>
            <CheckoutTitle title="Personal details" imgsrc="/images/user.svg" />
            <PersonalDetailsForm />
          </div>
        </div>
        <div className={`${styles.panel} ${checkActive(2, styles.active)}`}>
          <div className={styles.wrapper_panel_2}>
            <SignInHeader
              title="members"
              signUpLink="Not a member? Don't hesitate to"
            />
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
}
