import React, { useState } from "react";
import styles from './filter-component.module.css';
import Image from "next/image";
import ButtonFilter from "@/components/product-listing/button-filter";

export default function FilterComponent({ title, opt1, opt2, opt3, opt4, opt5 }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const imgsrc = expanded ? "/images/filter-arrow-up.svg" : "/images/filter-arrow-down.svg";

  return (
    <div className={styles.wrapper_component}>
      <div className={styles.wrapper_title} onClick={toggleExpand}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.wrapper_image}>
          <Image src={imgsrc} alt="image" width={16} height={16} />
        </div>
      </div>
      <div className={styles.divider} />
      {expanded && (
          <ul>
            <li><ButtonFilter option= {opt1} /></li>
            <li><ButtonFilter option= {opt2} /></li>
            <li><ButtonFilter option= {opt3} /></li>
            <li><ButtonFilter option= {opt4} /></li>
            <li><ButtonFilter option= {opt5} /></li>
          </ul>
      )}
    </div>
  );
}

