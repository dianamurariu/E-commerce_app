import React from "react";
import Link from "next/link";
import Image from "next/image";
import { iconDimensions } from "@/config";

export default function NavButton({ text, isLink, handleClick, style, image }) {
  return (
    <>
      {isLink ? (
        <Link className={style} href="/#promoSection">
          {text}
        </Link>
      ) : (
        <button className={style} onClick={() => handleClick(text)}>
          {text}
          <Image
            src={image}
            width={iconDimensions().small}
            height={iconDimensions().small}
          />
        </button>
      )}
    </>
  );
}
