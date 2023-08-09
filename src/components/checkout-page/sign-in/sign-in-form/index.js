import styles from './sign-in-form.module.css'
import SocialLogin from '../social-login'
import ButtonSubmit from '@/components/buttons/button-submit'

export default function SignInForm () {
    return (
        <div className={styles.wrapper_form}>
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Password" />
            <div className={styles.radio_input}>
                <input type="radio" checked />
                <label>Remember me for next sessionn</label>
            </div>
            <ButtonSubmit text="Sign In" />
            <div className={styles.divider} />
            <SocialLogin href="#" imgsrc="/images/Facebook-Icon.svg" text="Sign in with Facebook" />
            <SocialLogin href="#" imgsrc="/images/Google-Icon.svg" text="Sign in with Google" />
        </div>
    )
}