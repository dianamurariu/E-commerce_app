import React from 'react';
import styles from './button-cart.module.css';
import Image from 'next/image';

export default function ButtonCart({ btnFunction, onClick }) {
  return (
    <button className={styles.btnCart} onClick={onClick}>
      {btnFunction === 'plus' ? (
        <Image src="/images/Plus-Icon-Cart.svg" alt="Plus" width={16} height={16} />
      ) : (
        <Image src="/images/Minus-Icon-Cart.svg" alt="Minus" width={16} height={16} />
      )}
    </button>
  );
}





// import styles from './button-cart.module.css';
// import Image from 'next/image';

// export default function ButtonCart({ btnFunction, onClick }) {
//   const handleClick = () => {
//     if (btnFunction === 'plus') {
//       onClick(1);
//     } else if (btnFunction === 'minus') {
//       onClick(-1);
//     }
//   };

//   return (
//     <button className={styles.btnCart} onClick={handleClick}>
//       {btnFunction === 'plus' ? (
//         <Image src="/images/Plus-Icon-Cart.svg" alt="Plus" width={16} height={16} />
//       ) : (
//         <Image src="/images/Minus-Icon-Cart.svg" alt="Minus" width={16} height={16} />
//       )}
//     </button>
//   );
// }

