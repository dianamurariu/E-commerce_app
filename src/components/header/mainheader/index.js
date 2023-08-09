import Logo from "./logo";
import styles from "./mainheader.module.css";
import Search from "./search";
import User from "./user";
import Cart from "./cart";
import NavBar from "./nav-bar";

import { useCartContext } from "@/context/cartContext";

export default function MainHeader() {
  const { state } = useCartContext();

  return (
    <>
      <div className={styles.mainHeader}>
        <div className="container">
          <div className={styles.mainHeader__container}>
            <div className={styles.leftContainer}>
              <Logo image="/images/Logo.svg" style={styles.logo} />
              <NavBar />
            </div>

            <div className={styles.rightContainer}>
              <Search placeholder="Search for foods, products or other" />
              <User image="/images/user.svg" link="#" />
              <Cart
                image="/images/shopping-cart.svg"
                price={state.totalPrice.toFixed(2)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
