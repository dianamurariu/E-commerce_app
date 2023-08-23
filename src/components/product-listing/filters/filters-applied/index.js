import styles from "./filters-applied.module.css";
import CurrentFilter from "./filter-current";

export default function FiltersApplied() {
  return (
    <div className={styles.wrapper_applied_filters}>
      <h5 className={styles.title}>Applied filters:</h5>
      <div className={styles.wrapper_buttons}>
        <CurrentFilter text="🥖 Option 1" />
        <CurrentFilter text="🥖 Option 2" />
        <CurrentFilter text="🥖 Option 3" />
      </div>
    </div>
  );
}
