import styles from './button-delete.module.css';
import Image from "next/image";

import { useCartContext, cardActionType } from "@/context/cartContext";
import { useEffect } from "react";

export default function ButtonDelete({ id }) {
  const { state, dispatch } = useCartContext();

  useEffect(() => {
    const finalPrice = state.cards.reduce((acc, curr) => {
      return acc + parseFloat(curr.totalPrice);
    }, 0);

    dispatch({ type: cardActionType.SET_TOTAL_PRICE, payload: finalPrice });
  }, [state.cards]);

  const handleDelete = (id) => {
    return () => {
      const items = state.cards.filter((card) => {
        return card.id !== id;
      });
      dispatch({ type: cardActionType.UPDATE_CARDS, payload: items });
    };
  };

  return (
    <button
      type="button"
      className={styles.btn_delete}
      onClick={handleDelete(id)}
    >
      <Image src="/images/Delete-Product.svg" width={24} height={24} alt="icon" />
    </button>
  );
}



// import Image from 'next/image';
// import styles from './button-delete.module.css';
// import { cardActionType, useCartContext } from '@/context/cartContext';
// import { useEffect } from 'react';

// export default function ButtonDelete({ id }) {

//     const context = useCartContext();
//     const { state, dispatch } = context;
//     // const { state, dispatch } = useCartContext();

//     useEffect(() => {
//       const finalPrice = state.cards.reduce((acc, curr) => {
//         return acc + parseFloat(curr.totalPrice);
//       }, 0);
  
//       dispatch({ type: cardActionType.SET_TOTAL_PRICE, payload: finalPrice });
//     }, [state.cards]);

//     const handleDelete = (id) => {
//       return () => {
//         const items = state.cards.filter((card) => {
//           return card.id !== id;
//         });
//         dispatch({ type: cardActionType.UPDATE_CARDS, payload: items });
        
//       };
//     };

//   return (
//     <button type="button" className={styles.delete_product} onClick={handleDelete(id)} >
//       <Image src="/images/Delete-Product.svg" alt="icon" width={24} height={24} />
//     </button>
//   );
// }













// import styles from './button-delete.module.css';
// import Image from 'next/image';

// export default function ButtonDelete(){
//     return (
//         <div className={styles.wrapper_btn_delete}>
//             <button type="button" className={styles.delete_product}>
//                 <Image src="images/Delete-Product.svg" alt="icon" width={24} height={24} />
//             </button>
//         </div>
//     )
// }