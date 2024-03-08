import FilterSection from "./filter-section";
import LayoutProductListing from "../layout-product-listing";
import FiltersApplied from "./filters-applied";
import SortByButton from "./sort-by";
import styles from "./filters.module.css";
import Products from "../products";

export default function Filters() {
  return (
    <div className={styles.wrapper_filters}>
      <div className="container">
        <LayoutProductListing>
          <div className={styles.leftSide}>
            <FilterSection />
          </div>
          <div className={styles.rightSide}>
            <div className={styles.wrapper_filters_right}>
              <FiltersApplied />
              <div className={styles.wrapper_sort_by}>
                <SortByButton
                  opt1="Option 1"
                  opt2="Option 2"
                  opt3="Option 3"
                  opt4="Option 4"
                />
              </div>
            </div>
            <div className={styles.wrapper_products}>
              <Products />
            </div>
          </div>
        </LayoutProductListing>
      </div>
    </div>
  );
}
