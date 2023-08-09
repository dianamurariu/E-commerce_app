import styles from './stepper-confirmation.module.css';
import Image from 'next/image';

export default function StepperConfirmation () {
    return (
        <div className={styles.wrapper_stepper}>
            <div className={styles.button}>
                <Image src="/images/mdi_check.svg" alt="icon" width={18} height={18} />
            </div>
            <p>Payment was succesfull</p>
        </div>
    )
}