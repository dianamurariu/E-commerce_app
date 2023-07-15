import Link from 'next/link';
import Image from 'next/image';

export default function Logo ( {image, style} ) {
    return (
        <Link href="/" ><Image className={style} src={image} width={143} height={28} alt="Logo" /></Link>
    )
}
