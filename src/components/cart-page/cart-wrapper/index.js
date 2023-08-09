import LayoutCart from '../layout-cart';
import CartItem from '../cart-item';
import CartHeader from '../cart-header';
import CartSubtotal from '../cart-subtotal';
import ButtonCheckout from '@/components/buttons/button-checkout';
import styles from './cart-wrapper.module.css';

import { useEffect } from 'react';
import { useCartContext, cardActionType } from '@/context/cartContext';

export default function CartWrapper() {

  const { state, dispatch } = useCartContext();
  const { cards } = state;

  useEffect(() => {
    const finalPrice = state.cards.reduce((acc, curr) => {
      return acc + parseFloat(curr.totalPrice);
    }, 0);

    dispatch({ type: cardActionType.SET_TOTAL_PRICE, payload: finalPrice });
  }, [state.cards]);

  return (
    <LayoutCart>
      <div className={styles.wrapper_container_cart}>
        <div className={styles.wrapper_cart_top}>
          <CartHeader title="Items in your cart" imgsrc="/images/shopping-cart-gray.svg" />
          <CartSubtotal title="Cart Subtotal" subtotal={state.totalPrice.toFixed(2)} />
        </div>

        <div className={styles.wrapper_cart_body}>
        {cards.map((card) => {
              return <CartItem key={card.id} {...card} />;
            })}
        </div>

        <div className={styles.wrapper_cart_bottom}>
          <ButtonCheckout text="Proceed to checkout" />
        </div>
      </div>
    </LayoutCart>
  );
}




// import LayoutCart from '../layout-cart';
// import styles from './cart-wrapper.module.css';
// import CartHeader from '../cart-header';
// import CartSubtotal from '../cart-subtotal';
// import ButtonCheckout from '@/components/buttons/button-checkout';
// import CartItem from '../cart-item';

// import useCart from '@/context/cartContext';

// export default function CartWrapper() {

//     const { products, total } = useCart();

//   return (
//     <LayoutCart>
//       <div className={styles.wrapper_container_cart}>
//         <div className={styles.wrapper_cart_top}>
//           <CartHeader title="Items in your cart" imgsrc="/images/shopping-cart-gray.svg" />
//           <CartSubtotal title="Cart Subtotal" subtotal_price="26.70" />
//         </div>

//         <div className={styles.wrapper_cart_body}>
//             {products.map((product, index) => (
//                 <CartItem
//                 key={index}
//                 // img={product.img}
//                 img="/images/Image-Cart.svg" 
//                 title={product.title} 
//                 current_price={product.current_price} 
//                 />
//             ))}
//         </div>

//         <div className={styles.wrapper_cart_bottom}>
//           <ButtonCheckout text="Proceed to checkout" />
//         </div>
//       </div>
//     </LayoutCart>
//   );
// }


