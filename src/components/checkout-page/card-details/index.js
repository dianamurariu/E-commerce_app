import CheckoutTitle from '../checkout-title';
import styles from './card-details.module.css';
import ButtonSubmit from '@/components/buttons/button-submit';
import Link from 'next/link';

import { useCartContext } from "@/context/cartContext";

export default function CardDetails() {

    const { state } = useCartContext();

    return (
        <div className={styles.card_details}>
            <div className={styles.wrapper_title}>
                <CheckoutTitle title="Enter Card Details" imgsrc="/images/credit-card.svg" />
                <span>2/2</span>  
            </div>

            <div className={styles.wrapper_subtotal}>
                <p>Payment Amount</p>
                ${state.totalPrice.toFixed(2)}
            </div>
            <div className={styles.divider} />
            <input type="text" placeholder="Name on card" />
            <input type="text" placeholder="Card Number" inputMode="numeric" pattern="\d*" maxLength="16" />
            <div className={styles.wrapper_info_card}>
                <input type="month" placeholder='Expiry date' />
                <input type="text" placeholder="Security code" inputMode="numeric" pattern="\d*" maxLength="3" />
            </div>
            <input type="text" placeholder="ZIP / Postal code" inputMode="numeric" pattern="\d*" maxLength="6" />
            <Link className={styles.link} href="/checkout/confirmation">
                <ButtonSubmit text="Place Order" />
            </Link>

        </div>
    )
}