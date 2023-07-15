import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './cart.module.css';

export default function Cart( {image, price}) {
  return (
    <Link href="/cart">
      <span className={`${styles.Cart} ${styles.link}`}>
          <Image src={image} alt="image" width={16} height={16}/>
          <span className={styles.price}>{price}</span>
      </span>
    </Link>
  );
}