import styles from "./nav-item.module.css";

export default function NavItem({ option }) {
  return (
    <li>
      <a className={styles.navItem} href="#">
        {option}
      </a>
    </li>
  );
}
