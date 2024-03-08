import styles from "./stepper-confirmation.module.css";
import Image from "next/image";
import { iconDimensions } from "@/config";

export default function StepperConfirmation() {
  return (
    <div className={styles.wrapper_stepper}>
      <div className={styles.button}>
        <Image
          src="/images/mdi_check.svg"
          alt="icon"
          width={iconDimensions().extraMedium}
          height={iconDimensions().extraMedium}
        />
      </div>
      <p>Payment was succesfull</p>
    </div>
  );
}
