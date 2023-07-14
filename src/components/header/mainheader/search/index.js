import React from "react";
import styles from "./search.module.css";

export default function Search( {placeholder, className} ) {
  return (

      <div className={styles.searchContainer}>
        <input type="text" placeholder= {placeholder} className={`${styles.searchInput} ${styles.placeholderStyle} ${className}`} />
      </div>

  );
}