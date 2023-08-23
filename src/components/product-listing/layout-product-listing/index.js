import styles from "./layout-product-listing.module.css";

const LayoutProductListing = ({ children }) => {
  return <div className={styles.container__grid}>{children}</div>;
};

export default LayoutProductListing;
