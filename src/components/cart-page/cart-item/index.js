import Title from '@/components/title';
import ButtonDelete from '@/components/buttons/button-delete';
import CartQuantity from './cart-quantity';
import styles from './cart-item.module.css';

import { useState, useEffect } from 'react';
import { useCartContext, cardActionType } from '@/context/cartContext';

export default function CartItem (props) {
  
  const { id, img, title, currPrice } = props;

  const [total, setTotal] = useState(currPrice);
  const { state, dispatch } = useCartContext();
  const totalCount = state.totalCount;

  const [count, setCount] = useState(totalCount);

  
  useEffect(() => {
    const finalTotal = parseFloat((count * parseFloat(currPrice)).toFixed(2));
    setTotal(finalTotal);

    const items = state.cards.map((card) => {
      return {
        ...card,
        totalPrice: id === card.id ? finalTotal : card.totalPrice,
      };
    });

    dispatch({ type: cardActionType.UPDATE_CARDS, payload: items });

    const finalPrice = state.cards.reduce((acc, curr) => {
      return acc + parseFloat(curr.totalPrice);
    }, 0);

    dispatch({ type: cardActionType.SET_TOTAL_PRICE, payload: finalPrice });

    const totalCount = count;

    dispatch({ type: cardActionType.SET_TOTAL_COUNT, payload: totalCount });

  }, [count]);

  console.log("totalcount:", totalCount);

  return (
    
    <>
      <div className={styles.wrapper_cart}>
        <div className={styles.wrapper_image}>
          <img src={img} width={30} height={30} alt="icon" />
        </div>

        <div className={styles.wrapper_info}>

          <div className={styles.wrapper_info_up}>
            <div className={styles.wrapper_title}>
              <Title level="h4" style="weight400">
                {title} {id}
              </Title>
            </div>
            <ButtonDelete  {...props} />
          </div>

          <div className={styles.wrapper_info_down}>
            <CartQuantity setCount={setCount} count={count} />
            <div className={styles.item_price}>${total}</div>
            
          </div>
        </div>
      </div>
      <div className={styles.divider} />
      
    </>
  );
}



// import Title from '@/components/title';
// import ButtonDelete from '@/components/buttons/button-delete';
// import CartQuantity from './cart-quantity';
// import styles from './cart-item.module.css';

// import { useState, useEffect } from 'react';
// import { useCartContext, cardActionType } from '@/context/cartContext';

// export default function CartItem (props) {
  
//   const { id, img, title, currPrice } = props;
//   ;
//   const initialCount = 1;
//   const [count, setCount] = useState(initialCount);
//   const [total, setTotal] = useState(currPrice);
//   const { state, dispatch } = useCartContext();

//   useEffect(() => {
//     const finalTotal = parseFloat((count * parseFloat(currPrice)).toFixed(2));
//     setTotal(finalTotal);

//     const items = state.cards.map((card) => {
//       return {
//         ...card,
//         totalPrice: id === card.id ? finalTotal : card.totalPrice,
//       };
//     });

//     dispatch({ type: cardActionType.UPDATE_CARDS, payload: items });

//     const finalPrice = state.cards.reduce((acc, curr) => {
//       return acc + parseFloat(curr.totalPrice);
//     }, 0);

//     dispatch({ type: cardActionType.SET_TOTAL_PRICE, payload: finalPrice });
//   }, [count]);

//   return (
    
//     <>
//       <div className={styles.wrapper_cart}>
//         <div className={styles.wrapper_image}>
//           <img src={img} width={30} height={30} alt="icon" />
//         </div>

//         <div className={styles.wrapper_info}>

//           <div className={styles.wrapper_info_up}>
//             <div className={styles.wrapper_title}>
//               <Title level="h4" style="weight400">
//                 {title} {id}
//               </Title>
//             </div>
//             <ButtonDelete  {...props} />
//           </div>

//           <div className={styles.wrapper_info_down}>
//             <CartQuantity setCount={setCount} count={count} />
//             <div className={styles.item_price}>${total}</div>
            
//           </div>
//         </div>
//       </div>
//       <div className={styles.divider} />
      
//     </>
//   );
// }

// import Image from 'next/image';
// import Title from '@/components/title';
// import ButtonDelete from '@/components/buttons/button-delete';
// import CartQuantity from './cart-quantity';
// import styles from './cart-item.module.css';

// export default function CartItem({ img, title, current_price, productIndex }) {

//   return (
//     <>
//       <div className={styles.wrapper_cart}>
//         <div className={styles.wrapper_image}>
//           <Image src={img} alt="image" width={30} height={30} />
//         </div>
//         <div className={styles.wrapper_info}>
//           <div className={styles.wrapper_info_up}>
//             <div className={styles.wrapper_title}>
//               <Title level="h4" style="weight400">
//                 {title}
//               </Title>
//             </div>
//             <ButtonDelete title={title} current_price={current_price} />
//           </div>
//           <div className={styles.wrapper_info_down}>
//             <CartQuantity productIndex={productIndex} />
//             <div className={styles.item_price}>${current_price}</div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.divider} />
//     </>
//   );
// }





