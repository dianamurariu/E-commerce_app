import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavButton({ text, isLink, handleClick, style, image }) {

  return (
    <>
      {isLink && <Link className={style} href="/#promoSection">{text}</Link>}
      {!isLink && <button className={style} onClick={() => handleClick(text)}>{text}<Image src={image} width={16} height={16}/></button>}
    </>
  );
}




    {/* {isLink && <Link className={style} href={`/${text.toLowerCase()}`}>{text}</Link>} */}




