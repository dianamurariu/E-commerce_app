import styles from './checkout-form.module.css';
import Title from '@/components/title';
import Stepper from '../stepper';

export default function CheckoutForm({children}) {
    return (
        <>
            <div className={styles.container_checkout_form}>
                <div className={styles.wrapper_title}>
                    <Title level="h3" style="weight600">Fill it in and you're good to go!</Title>
                </div>
                <div className={styles.wrapper_checkout_form}>
                
                    {children}

                </div>

            </div>

        </>
    )
}