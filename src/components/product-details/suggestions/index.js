import TitleDetails from '../title-details';
import ProductCardSmall from '../product-card-small';
import styles from './suggestions.module.css';

export default function Suggestions({}) {
    return (
       <div className={styles.wrapper_suggestions}>
            <TitleDetails level="h3">Other’s also bought</TitleDetails>
            <div className={styles.wrapper_cards}>
                <ProductCardSmall id={51} currPrice="8.90" imgSrc="/images/card-image.svg" />
                <ProductCardSmall id={52} currPrice="8.90" imgSrc="/images/card-image.svg" />
                <ProductCardSmall id={53} currPrice="8.90" imgSrc="/images/card-image.svg" />
            </div>
       </div>

    )
}