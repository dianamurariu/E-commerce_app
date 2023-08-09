import styles from './hero-category.module.css';
import GridLayout from '../../layout/layout-grid';
import TextBanner from './text-banner';
import Image from 'next/image';

export default function HeroCategory() {
    return (
        <div className={styles.wrapper__hero_category}>
            <div className="container">
                <GridLayout>
                <div className={styles.leftSide}>
                    <TextBanner categoryName="Party Items" categoryHeading="A party without these items is simply not a party."/>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.wrapper_image}>
                        <Image src="/images/Image-Icon-bg.svg" alt="image" width={187} height={187}/>
                    </div>  
                </div>
                </GridLayout>
            </div>
        </div>
    )
}