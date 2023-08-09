import { useRouter } from "next/router";
import styles from "./breadcrumbs.module.css";
import Image from "next/image";

export default function Breadcrumbs() {
  const router = useRouter();
  const currentPath = router.pathname;

  let currentLink = "";

  const paths = currentPath.split("/").filter((crumb) => crumb !== "");

  const crumbs = paths.map((crumb, index) => {
    currentLink += `/${crumb}`;

    const capitalizedCrumb = crumb.charAt(0).toUpperCase() + crumb.slice(1);

    const isLastCrumb = index === paths.length - 1;

    return (
      <div key={index}>
        <button type="button" className={`${styles.crumb} ${isLastCrumb ? styles.lastCrumb : ""}`}
          onClick={() => router.push(currentLink)}
        >
          {capitalizedCrumb}
        </button>
        {!isLastCrumb && (
          <div className={styles.imageContainer}>
            <Image src="/images/arrow-breadcrumbs.svg" alt="image" width={14} height={14} />
          </div>
        )}
      </div>
    );
  });

  return (
    <div className={styles.wrapper__breadcrumbs}>
      <div className="container">
        <div className={styles.breadcrumbs_inner}>
          <button type="button" className={styles.crumb} onClick={() => router.push("/")} >
            Home
          </button>
          <div className={styles.imageContainer}>
            <Image src="/images/arrow-breadcrumbs.svg" alt="image" width={14} height={14} />
          </div>
          {crumbs}
        </div>
      </div>
      <div className={styles.divider} />
    </div>
  );
}




