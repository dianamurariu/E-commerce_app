import styles from './contact-form.module.css';
import ButtonSubmit from '@/components/button-submit';
import NotificationComponent from './notification-component';
import InputComponent from './input-component';


export default function ContactForm () {
    return (
        <>
            <div className={styles.wrapper_form}>
                <NotificationComponent imgsrc="images/quick-reply-icon.svg" text="We usually respond within 1 working day 😉"/>
                <div className={styles.container_input}>
                    <InputComponent type="text" className={styles.input_small} placeholder="Full Name" />
                    <InputComponent type="email" className={styles.input_small} placeholder="E-mail" />
                    <InputComponent type="text" className={styles.input_large} placeholder="Message" />
                
                </div>
                <ButtonSubmit text="Send message" />
            </div>
        </>
    )
}