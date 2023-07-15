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


// import styles from './Button.module.css';

// export default function Button({ style, size, text, icon, left }) {

//   return (
//     <>
//       {left ? (
//         style === "dark" ? (
//           size === "large" ? (
//             <button className={`${styles.btnDark} ${styles.btnLarge}`}>
//               <img className={styles.imgLeft} src={icon} alt="" />
//               {text}
//             </button>
//           ) : (
//             <button className={`${styles.btnDark} ${styles.btnRegular}`}>
//               <img className={styles.imgLeft} src={icon} alt="" />
//               {text}
//             </button>
//           )
//         ) : style === "light__black" ? (
//           size === "large" ? (
//             <button className={`${styles.btnLight__black} ${styles.btnLarge}`}>
//               <img className={styles.imgLeft} src={icon} alt="" />
//               {text}
//             </button>
//           ) : (
//             <button className={`${styles.btnLight__black} ${styles.btnRegular}`}>
//               <img className={styles.imgLeft} src={icon} alt="" />
//               {text}
//             </button>
//           )
//         ) : size === "large" ? (
//           <button className={`${styles.btnLight__white} ${styles.btnLarge}`}>
//             {text}
//             <img className={styles.imgLeft} src={icon} alt="" />
//           </button>
//         ) : (
//           <button className={`${styles.btnLight__white} ${styles.btnRegular}`}>
//             {text}
//             <img className={styles.imgLeft} src={icon} alt="" />
//           </button>
//         )


//       ) : style === "dark" ? (
//         size === "large" ? (
//           <button className={`${styles.btnDark} ${styles.btnLarge}`}>
//             {text}
//             <img className={styles.imgRight} src={icon} alt="" />
//           </button>
//         ) : (
//           <button className={`${styles.btnDark} ${styles.btnRegular}`}>
//             {text}
//             <img className={styles.imgRight} src={icon} alt="" />
//           </button>
//         )
//       ) : style === "light__black" ? (
//         size === "large" ? (
//           <button className={`${styles.btnLight__black} ${styles.btnLarge}`}>
//             {text}
//             <img className={styles.imgRight} src={icon} alt="" />
//           </button>
//         ) : (
//           <button className={`${styles.btnLight__black} ${styles.btnRegular}`}>
//             {text}
//             <img className={styles.imgRight} src={icon} alt="" />
//           </button>
//         )
//       ) : size === "large" ? (
//         <button className={`${styles.btnLight__white} ${styles.btnLarge}`}>
//           {text}
//           <img className={styles.imgRight} src={icon} alt="" />
//         </button>
//       ) : (
//         <button className={`${styles.btnLight__white} ${styles.btnRegular}`}>
//           {text}
//           <img className={styles.imgRight} src={icon} alt="" />
//         </button>
//       )}
//     </>
//   );
// }


