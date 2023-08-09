import styles from './social-login.module.css';
import Link from "next/link";
import Image from "next/image";

export default function SocialLogin({ imgsrc, text, href }) {
  return (
    <Link className={styles.social_btn} href={href}>
      <Image src={imgsrc} width={22} height={22} alt="icon" />
      {text}
    </Link>
  );
}