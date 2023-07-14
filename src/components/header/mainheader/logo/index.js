import Link from 'next/link'

export default function Logo ( {image, style} ) {
    return (
        <Link href="/" ><img className={style} src={image} alt="Logo" /></Link>
    )
}
