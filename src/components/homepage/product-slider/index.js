import styles from "./product-slider.module.css";
import Title from "../../title";
import TabsComponent from "./TabsComponent";

export default function ProductSlider() {
  return (
    <div className={styles.wrapper__slider}>
      <div className="container">
        <div className={styles.wrapper_title}>
          <Title level="h3" style="weight400">
            Explore the items you&apos;ll love
          </Title>
        </div>
        <TabsComponent />
      </div>
    </div>
  );
}
