import styles from "./user.module.css";

export default function User({ image, link, className}) {
    return (
        <a href={link} >
            <div className={`${className} ${styles.button}`}> <img src={image} alt="User" /></div>  
        </a>
    );
}