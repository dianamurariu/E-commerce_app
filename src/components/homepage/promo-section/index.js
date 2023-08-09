import styles from './promo-section.module.css';
import GridLayout from '../../layout/layout-grid';
import Title from '../../title';
import Button from '../../buttons/button';
import Image from 'next/image';
import Basket from './basket';

export default function PromoSection() {
    return ( 
    <div className='promo_section' id="promoSection">
        <div className={styles.wrapper_promo}>
            <div className="container">
                <GridLayout>
                    <div className={styles.leftSide}>
                        <div className={styles.wrapper_title}>
                            <Title level="h2" style="weight700">YAAY! KING'S DAY!</Title>
                        </div>
                        <Button style="btnPromo text-promo" text="⏰  This offer valid only untill 1st of May" />
                        <div className={styles.wrapper_subtitle}>
                            <Title level="h3" style="weight400">Grab a <strong className={styles.strongText}>treat basket</strong> for a special occasion</Title>
                        </div>
                        <p className={styles.promo_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Purus, vitae ante risus quis cursus aliquam consectetur.</p>
                        <Button style="btnDark btnLarge text-white btnHover" text="More for less — check it out" />
                        <Image className={styles.promo_image} src="images/Image-Icon-bg.svg" width={200} height={200} alt="image"/>   
                    </div>

                    <div className={styles.rightSide}>

                        <div className={styles.wrapper_basket}>
                            <Basket imgstyle="dark" text="Party Must-Haves" price="$8." price_decimal="90" />
                            <Basket imgstyle="light" text="For king and his queen" price="$8." price_decimal="90" />
                            <Basket imgstyle="light" text="King's decorations" price="$8." price_decimal="90" />
                            <Basket imgstyle="dark" text="King's day with Family" price="$8." price_decimal="90" />
                        </div>
                    </div>                   
                </GridLayout>
            </div>            
        </div> 
    </div>
    );
}