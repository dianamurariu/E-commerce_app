import styles from './promo-section.module.css';
import GridLayout from '../grid-layout';
import Title from '../title';
import Button from '../button';
import Image from 'next/image';
import Basket from './basket';

export default function PromoSection() {
    return ( 
    <div className='promo_section'>
        <div className={styles.wrapper_promo}>
            <div className="container">
                <GridLayout>
                    <div className={styles.leftSide}>
                        <Title level = {2}>YAAY! KING'S DAY!</Title>
                        <Button style="btnPromo text-promo" text="⏰  This offer valid only untill 1st of May" />
                        <Title level = {4}>Grab a treat basket for a special occasion</Title>
                        <p className={styles.promo_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Purus, vitae ante risus quis cursus aliquam consectetur.</p>
                        <Button style="btnDark btnLarge text-white" text="More for less — check it out" />
                        <Image className={styles.promo_image} src="images/Image-Icon-bg.svg" width={200} height={200} /> 
                        
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