import Title from "@/components/title";
import styles from "./thanks-message.module.css";
import Image from "next/image";
import ButtonSubmit from "@/components/buttons/button-submit";
import ButtonContact from "@/components/buttons/button-contact";
import Link from "next/link";

export default function ThanksMessage({ title }) {
  return (
    <div className={styles.wrapper_message}>
      <div className={styles.wrapper_image}>
        <Image
          src="/images/Confetti Icon.svg"
          alt="icon-confetti"
          width={108}
          height={108}
        />
      </div>
      <div className={styles.wrapper_title}>
        <Title level="h3" style="weight700">
          {title}
        </Title>
      </div>
      <p>
        All of your lekker items should be with you before 1st of July 2020. 🚚
      </p>
      <ButtonSubmit
        text="Download or print your bon"
        imgsrc="/images/ion_receipt.svg"
      />
      <Link className={styles.link} href="/">
        <ButtonContact
          className={styles.btnHomepage}
          type="text"
          text="Go back to Homepage"
        />
      </Link>
    </div>
  );
}
