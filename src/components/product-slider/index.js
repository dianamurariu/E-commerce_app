import styles from './product-slider.module.css';
import Title from '../title';
import TabsComponent from './TabsComponent';

export default function ProductSlider() {

    return (
        <>
            <div className={styles.wrapper__slider}>
                <div className="container">
                    <Title level={4}>Explore the items you'll love</Title>
                    <TabsComponent />
                </div>
            </div>
        </>
    )
}