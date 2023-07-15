import Title from '../title';
import FAQform from './FAQ-form';
import ContactForm from './contact-form';
import styles from './contact-section.module.css';

export default function ContactSection() {
    return (
    <>
    <div className='contact_section'>
        <div className={styles.wrapper_contact}>
            <div className='container'>

                <div className='wrapper_title'>
                    <Title level={3}>Any questions? Just ask.</Title>
                    <div className={styles.container_subtitle}>
                        <Title level={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Title>
                    </div>
                </div>

                <div className={styles.container_forms}>
                    <div className={styles.leftSide}>
                        <ContactForm imgsrc="images/quick-reply-icon.svg" />
                    </div>
                    <div className={styles.rightSide}>
                        <FAQform imgsrc="images/card-image.svg" text="Didn't find your answer? Give it a call or message."/>
                    </div>
                </div> 
                    
            </div>
        </div>
    </div>
    </>
    )
}