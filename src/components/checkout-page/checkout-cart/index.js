import styles from "./checkout-cart.module.css";
import Image from "next/image";
import Title from "@/components/title";
import CartSmall from "../cart-small";
import { iconDimensions } from "@/config";
import { useCartContext } from "@/context/cartContext";

export default function CheckoutCart() {
  const context = useCartContext();
  const { state } = context;

  const cartItemCount = state.cards.length;

  return (
    <div className={styles.container_checkout_cart}>
      <div className={styles.wrapper_title}>
        <Image
          src="/images/shopping-cart-gray.svg"
          alt="icon-cart"
          width={iconDimensions().medium}
          height={iconDimensions().medium}
        />
        <Title level="h3" style="weight600">
          Your cart ({cartItemCount} items)
        </Title>
      </div>

      <div className={styles.wrapper_checkout_cart}>
        <CartSmall />
      </div>
    </div>
  );
}
