import React from 'react';
import Link from 'next/link';
import styles from './cart.module.css';

export default function Cart( {image, price}) {
  return (
    <Link href="/cart">
      <span className={`${styles.Cart} ${styles.link}`}>
          <img src={image} />
          <span className={styles.price}>{price}</span>
      </span>
    </Link>
  );
}