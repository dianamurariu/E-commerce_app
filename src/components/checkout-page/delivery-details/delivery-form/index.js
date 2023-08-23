import styles from "./delivery-form.module.css";
import DeliveryFormStack from "../delivery-form-stack";
import ButtonSubmit from "@/components/buttons/button-submit";
import CheckoutTitle from "../../checkout-title";
import Link from "next/link";

export default function DeliveryForm() {
  return (
    <div className={styles.delivery_form}>
      <CheckoutTitle title="Delivery method" imgsrc="/images/truck.svg" />
      <div className={styles.wrapper_form_stack}>
        <DeliveryFormStack />
        <Link className={styles.link} href="/checkout/payment">
          <ButtonSubmit text="Proceed" />
        </Link>
      </div>
    </div>
  );
}
