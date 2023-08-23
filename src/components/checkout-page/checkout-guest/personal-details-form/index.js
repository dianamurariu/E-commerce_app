import styles from "./personal-details-form.module.css";
import ButtonSubmit from "@/components/buttons/button-submit";
import Link from "next/link";

export default function PersonalDetailsForm() {
  return (
    <form className={styles.form_personal_details}>
      <input type="email" placeholder="E-mail" />
      <span className={styles.divider}></span>
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" />
      <input type="tel" placeholder="Phone (optional)" />
      <div className={styles.divider} />
      <div className={styles.search}>
        <input
          type="search"
          placeholder="Enter the first line of you address"
        />
      </div>
      <div className={styles.form_bottom}>
        <div className={styles.country}>
          <label>Country</label>
          <p>🇳🇱 Netherlands</p>
        </div>
        <select>
          <option>Change country</option>
          <option>Romania</option>
          <option>United Kingdom</option>
          <option>Spain</option>
        </select>
      </div>
      <textarea placeholder="Delivery address" />
      <Link className={styles.link} href="/checkout/delivery-details">
        <ButtonSubmit text="Proceed" />
      </Link>
    </form>
  );
}
