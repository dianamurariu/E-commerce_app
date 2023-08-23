import Link from "next/link";

export default function Step({ number, linkUrl, linkText, className }) {
  return (
    <div className={className}>
      <span>{number}</span>
      <Link href={linkUrl}>{linkText}</Link>
    </div>
  );
}
