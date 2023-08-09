import styles from './FAQ-form.module.css';
import Image from 'next/image';
import Title from '@/components/title';
import Search from '@/components/header/mainheader/search';
import ButtonContact from '@/components/buttons/button-contact';

export default function FAQform({imgsrc, text}) {
    return (
        <>
        <div className={styles.wrapper_FAQ}>
            <div className={styles.container_image}>
                <Image src={imgsrc} alt="icon" width={64} height={64} />
            </div>
            <div className={styles.wrapper_title}>
                <Title level="h3" style="weight600">Get all the answers right away.</Title>
            </div>
            <h2 className={styles.subtitle}>Ask a question and get all of your answers right away.</h2>
            <Search className={`${styles.searchInput} ${styles.placeholderStyle}`} 
                    placeholder="e.g. When will my order arrive?" />
            <p className={styles.paragraph}>{text}</p>
            <div className={styles.wrapper_buttons}>
                <ButtonContact type="call" text="+1 202-555-0173" />
                <ButtonContact type="email" text="lekker@dutchie.com" />
            </div>

        </div>
        </>
    )

}