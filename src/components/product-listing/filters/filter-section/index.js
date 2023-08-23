import styles from "./filter-section.module.css";
import FilterComponent from "./filter-component";

export default function FilterSection() {
  return (
    <div className={styles.wrapper_filter_section}>
      <FilterComponent
        title="Title"
        opt1="🥖 Selected (78)"
        opt2="🥖 Option (28)"
        opt3="🥖 Option (9)"
        opt4="🥖 Option (12)"
        opt5="🥖 Option (10)"
      />
      <FilterComponent
        title="Title"
        opt1="🥖 Selected (78)"
        opt2="🥖 Option (28)"
        opt3="🥖 Option (9)"
        opt4="🥖 Option (12)"
        opt5="🥖 Option (10)"
      />
      <FilterComponent
        title="Title"
        opt1="🥖 Selected (78)"
        opt2="🥖 Option (28)"
        opt3="🥖 Option (9)"
        opt4="🥖 Option (12)"
        opt5="🥖 Option (10)"
      />
      <FilterComponent
        title="Title"
        opt1="🥖 Selected (78)"
        opt2="🥖 Option (28)"
        opt3="🥖 Option (9)"
        opt4="🥖 Option (12)"
        opt5="🥖 Option (10)"
      />
      <FilterComponent
        title="Title"
        opt1="🥖 Selected (78)"
        opt2="🥖 Option (28)"
        opt3="🥖 Option (9)"
        opt4="🥖 Option (12)"
        opt5="🥖 Option (10)"
      />
    </div>
  );
}
