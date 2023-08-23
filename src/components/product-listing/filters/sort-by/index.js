import React, { useState } from "react";
import Image from "next/image";
import styles from "./sort-by.module.css";
import { iconDimensions } from "@/config";

export default function SortByButton({ opt1, opt2, opt3, opt4 }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles.wrapper_btn_sort_by}>
      <button className={styles.btnSortBy} type="button" onClick={toggleExpand}>
        Sort By
        <Image
          src="/images/filter-arrow-down.svg"
          alt="icon"
          width={iconDimensions().small}
          height={iconDimensions().small}
        />
      </button>

      {expanded && (
        <div className={styles.dropdown}>
          <ul>
            <li>
              <button className={styles.btnOption} type="button">
                {opt1}
              </button>
            </li>
            <li>
              <button className={styles.btnOption} type="button">
                {opt2}
              </button>
            </li>
            <li>
              <button className={styles.btnOption} type="button">
                {opt3}
              </button>
            </li>
            <li>
              <button className={styles.btnOption} type="button">
                {opt4}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
