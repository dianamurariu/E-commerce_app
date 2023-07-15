import React from 'react';
import Link from 'next/link';
import styles from './nav-list.module.css';

export default function List({object}) {
  return (
    <div>
        <h6 className={styles.ListTitle}>{object.title}</h6>
        <hr className={styles.ListHr}></hr>
      <ul>
        {object.content.map((item, index) => (
          <li key={index} className={styles.ListItem}><Link className={styles.ListLink} href="#">{item}</Link></li>
        ))}
      </ul>
    </div>
  );
}

