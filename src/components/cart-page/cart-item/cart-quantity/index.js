
import styles from './cart.quantity.module.css';
import ButtonCart from '../../button-cart';

export default function CartQuantity( {setCount, count}) {

  return (
    <div className={styles.wrapper_cart}>
      <div className={styles.quantity}>
        <ButtonCart btnFunction="minus" onClick={() => 
          count > 1 ? setCount(count - 1) : setCount(1) } 
        />

        <span className={styles.numberItems}>{count}x</span>

        <ButtonCart btnFunction="plus" onClick={() => 
          setCount(count + 1)} 
        />
      </div>
    </div>
  );
}




