import Email from "./email";
import Notification from "./notification";
import NavItem from "./nav-item";
import styles from "./preheader.module.css";

export default function PreHeader() {
  return (
    <div className={styles.preheader}>
      <div className="container">
        <div className={styles.preheader__container}>
          <Email mail="info@dutchie.nl" />
          <Notification
            firstPart="40% off dutch sweets"
            secondPart="only today!"
          />

          <ul className={styles.navMenu}>
            <NavItem option="Contact" />
            <NavItem option="FAQ" />
          </ul>
        </div>
      </div>
    </div>
  );
}
