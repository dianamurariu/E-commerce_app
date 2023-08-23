import styles from "./button-submit.module.css";
import Image from "next/image";
import { iconDimensions } from "@/config";

export default function ButtonSubmit({ text, imgsrc }) {
  return (
    <button type="submit" className={styles.ButtonSubmit}>
      {imgsrc && (
        <Image
          src={imgsrc}
          alt="icon"
          width={iconDimensions().small}
          height={iconDimensions().small}
        />
      )}
      {text}
    </button>
  );
}
