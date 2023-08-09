import styles from './button.module.css';
import Image from 'next/image';

export default function Button({style = "", text, imgsrc, imgposition , imgwidth, imgheight}) {
  return (
    <button className={style}>
      {imgposition === "left" && (
        <Image src={imgsrc} className={styles.iconLeft} alt="icon" width={imgwidth} height={imgheight}/>
      )}
      {text}
      {imgposition === "right" && (
        <Image src={imgsrc} className={styles.iconRight} alt="icon" width={imgwidth} height={imgheight} />
      )}
    </button>
  );
}
