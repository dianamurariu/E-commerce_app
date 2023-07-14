import TabButton from '@/components/button-tab';
import data from '../products.json';
import { useState } from "react";
import SwiperComponent from '../swiper-component';
import styles from './TabsComponent.module.css'

export default function TabsComponent() {

    var dataObject = data;

    const [activeTab, setActiveTab] = useState(dataObject.productTabs[0].name);

    function displaySwiper(showSwiper) {
        setActiveTab(showSwiper);
    }

    return (
        <div className={styles.tabsComponent}>
            <div className={styles.tab}>
                {dataObject.productTabs.map((item,index) => (
                    <TabButton key={index} isActive={activeTab === item.name} text={item.name} handleClick={displaySwiper} />
                ))}
            </div>
            {dataObject.productTabs.map((item,index) => (
                    activeTab === item.name && <SwiperComponent key={index} cards={item.items} />
                ))}
        </div>
    );
}



// #1 Copy json in component directory
// #2 Import inside a variable (hold value of json)
// #3 Create inside components dir TabsComponent
// #4 Copy the functionality inside Tabs Component
// #5 Pass as props the product json
// #6 Map the products to render