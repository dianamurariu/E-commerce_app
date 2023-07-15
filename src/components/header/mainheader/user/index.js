import styles from "./user.module.css";
import Image from "next/image";

export default function User({ image, link, className}) {
    return (
        <a href={link} >
            <div className={`${className} ${styles.button}`}><Image src={image} width={16} height={16} alt="User" /></div>  
        </a>
    );
}