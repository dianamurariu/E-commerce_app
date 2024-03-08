import GridLayout from "@/components/layout/layout-grid";
import styles from "./product-component.module.css";
import ProductInfo from "../product-info";
import PurchaseInfo from "../purchase-info";
import Suggestions from "../suggestions";
import SwiperSection from "../swiper-section";

export default function ProductComponent() {
  return (
    <div className={styles.wrapper_details}>
      <div className="container">
        <GridLayout>
          <div className={styles.leftSide}>
            <SwiperSection />
            <ProductInfo
              titleDesc="Description"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit pretium lectus dignissim id nulla nisl at pellentesque:"
              descList="•   Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              titleChar="Characteristics"
              char="Lorem ipsum dolor sit amet."
            />
          </div>
          <div className={styles.rightSide}>
            <PurchaseInfo
              title="Product Title"
              description="250 g  •  Regular price per kilogram $39.90"
              price="$18.90"
            />
            <Suggestions />
          </div>
        </GridLayout>
      </div>
    </div>
  );
}
