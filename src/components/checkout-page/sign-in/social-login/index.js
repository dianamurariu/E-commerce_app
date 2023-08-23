import styles from "./social-login.module.css";
import Link from "next/link";
import Image from "next/image";
import { iconDimensions } from "@/config";

export default function SocialLogin({ imgsrc, text, href }) {
  return (
    <Link className={styles.social_btn} href={href}>
      <Image
        src={imgsrc}
        width={iconDimensions().extraMedium}
        height={iconDimensions().extraMedium}
        alt="icon-social"
      />
      {text}
    </Link>
  );
}
