import styles from './sign-in.module.css';
import Logo from '@/components/header/mainheader/logo';
import Title from '@/components/title';
import Button from '@/components/buttons/button';
import Link from 'next/link';

export default function SignInHeader({title, signUpLink}) {
    return (
        <div className="container_header">
            <div className={styles.wrapper_header}>
                <Logo image="/images/Logo.svg" />
                <div className={styles.divider} />
                <div className={styles.wrapper_title}>
                    <Title level="h4" style="weight400">{title}</Title>
                </div>
            </div>
            <div className={styles.sign_up_link}>
                <div className={styles.wrapper_link}>
                    <Title level="h4" style="weight400">{signUpLink}</Title>
                </div> 
                <Link className={styles.link} href= "#">
                    <Button className={styles.button_signIn}
                    style="btnTransparent text-black" text="sign up" 
                    imgsrc="/images/arrow-right-black.svg" 
                    imgposition="right" imgwidth={16} imgheight={16} alt="icon"/>

                </Link>
            </div>
        </div>
    )
}