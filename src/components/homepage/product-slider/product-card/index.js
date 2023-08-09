import Link from 'next/link';
import styles from './product-card.module.css';
import ButtonAdd from '@/components/buttons/button-add';

export default function ProductCard(props) {
  const { id, img, discount, title, originalPrice, currPrice } = props;

  return (
    <div className={styles.wrapper_card}>
      <div className={styles.card_top}>
        <img className={styles.card_image} src={img} alt="image" />
        {discount && <span className={styles.discount}>{discount}</span>}
        <hr className={styles.card_line} />
      </div>

      <div className={styles.card_body}>
        <Link href="/product-details" className={styles.card_title}>
          {title}
        </Link>

        <div className={styles.card_bottom}>
          <p className={styles.current_price}>
            <span className={styles.original_price}>
              <s>{originalPrice}</s>
            </span>
            <span className={styles.dollar}>$</span>
            <span>{currPrice}</span>
          </p>
          <ButtonAdd imgsrc="/images/plus-icon.svg" {...props} />
        </div>
      </div>
    </div>
  );
}


// import Link from 'next/link';
// import styles from './product-card.module.css';
// import ButtonAdd from '@/components/buttons/button-add';

// export default function ProductCard(props) {
//   // Destructure props
//   const { id, img, discount, title, current_price } = props;

//   // Calculate original_price and its parts
//   let original_price = current_price; // Initialize with current_price
//   let original_price_parts = [current_price, '00']; // Initialize with current_price and cents

//   if (discount) {
//     const disc = parseFloat(discount.split('%')[0]); // Convert discount to a number
//     if (!isNaN(disc)) {
//       const discountedPrice = (Number(disc) * (Number(current_price) / 100) + Number(current_price)).toFixed(2);
//       original_price = discountedPrice;
//       original_price_parts = discountedPrice.toString().split('.');
//     }
//   }

//   return (
//     <div className={styles.wrapper_card}>
//       <div className={styles.card_top}>
//         <img className={styles.card_image} src={img} alt="image" />
//         {discount && <span className={styles.discount}>{discount}</span>}
//         <hr className={styles.card_line} />
//       </div>

//       <div className={styles.card_body}>
//         <Link href="/product-details" className={styles.card_title}>
//           {title}
//         </Link>

//         <div className={styles.card_bottom}>
//           <div className={styles.current_price}>
//             {discount && (
//               <span className={styles.original_price}>
//                 <del>{original_price_parts[0]}.</del>
//                 <sup>{original_price_parts[1]}</sup>
//               </span>
//             )}
//             <span className={styles.current_price}>
//               {/* {current_price} */}
//                ${~~current_price}.<sup>{current_price.split('.')[1]}</sup>
//             </span>
//           </div>
//           {/* <ButtonAdd  btncolor="dark" {...props} id={id}/> */}
//           <ButtonAdd imgsrc="/images/plus-icon.svg" {...props} />
//         </div>
//       </div>
//     </div>
//   );
// }


// import Link from 'next/link';
// import styles from './product-card.module.css';
// import ButtonAdd from '@/components/buttons/button-add';

// export default function ProductCard(props) {

//   let {id, img, discount, title, original_price, current_price} = props;

//   current_price = current_price.split('$')[1];
//   let disc;
//   if (discount) {
//     disc = discount.split('%')[0];
//   }
//   original_price = disc ? (Number(disc) * (Number(current_price) / 100) + Number(current_price)).toFixed(2) : current_price;
//   const original_price_parts = original_price.toString().split('.');

//   return (
//     <>
//       <div className={styles.wrapper_card}>
//         <div className={styles.card_top}>
//           <img className={styles.card_image} src={img} alt="image" />
//           {discount && <span className={styles.discount}>{discount}</span>}
//           <hr className={styles.card_line} />
//         </div>

//         <div className={styles.card_body}>
//           <Link href="/product-details" className={styles.card_title}>
//             {title}
//           </Link>

//           <div className={styles.card_bottom}>
//             <div className={styles.current_price}>
//               {discount && (
//                 <span className={styles.original_price}>
//                   <del>{original_price_parts[0]}.</del>
//                   <sup>{original_price_parts[1]}</sup>
//                 </span>
//               )}
//               <span className={styles.current_price}>
//               {current_price}
//                 {/* ${~~current_price}.<sup>{current_price.split('.')[1]}</sup> */}
//               </span>
//             </div>
//             <ButtonAdd id="test-button-id" btncolor="dark" {...props}  />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }






// import ButtonAdd from '@/components/buttons/button-add';
// import styles from './product-card.module.css';
// import Link from 'next/link';

// export default function ProductCard({ img, discount, title, original_price, current_price }) {
//     current_price = current_price.split("$")[1];
//     let disc;
//     if (discount) {
//         disc = discount.split("%")[0];
//     }
//     original_price = disc ? (Number(disc) * Number(current_price) / 100 + Number(current_price)) : Number(current_price);
//     const original_price_parts = original_price.toString().split(".");

//     return (
//         <>
//             <div className={styles.wrapper_card}>
//                 <div className={styles.card_top}>
//                     <img className={styles.card_image} src={img} alt="image" />
//                     {discount && <span className={styles.discount}>{discount}</span>}
//                     <hr className={styles.card_line} />
//                 </div>

//                 <div className={styles.card_body}>
//                     <Link href="/product-details" className={styles.card_title}>{title}</Link>

//                     <div className={styles.card_bottom}>
//                         <div className={styles.current_price}>
//                             {discount && (
//                                 <span className={styles.original_price}>
//                                     <del>
//                                         {original_price_parts[0]}.
//                                     </del>
//                                     <sup>{original_price_parts[1]}</sup>
//                                 </span>
//                             )}
//                             <span className={styles.current_price}>${~~current_price}.
//                                 <sup>{current_price.split(".")[1]}</sup>
//                             </span>
//                         </div>
//                         <ButtonAdd btncolor="dark" />
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
