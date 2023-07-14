import React from 'react';
import Link from 'next/link';

export default function NavButton({ text, isLink, handleClick, style, image }) {

  return (
    <>
    {isLink && <Link className={style} href={`/${text.toLowerCase()}`}> {text}</Link>}
    {!isLink && <button className={style} onClick={() => handleClick(text)}>{text} <img src={image} /></button>}
    </>
  );
}

