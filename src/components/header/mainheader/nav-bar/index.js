import NavButton from "../nav-button";
import styles from "./nav-bar.module.css";
import { useState } from "react";
import MegaMenu from "../mega-menu";

export default function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState("");

  function toggleDropdown(openDropdown) {
    let option =
      activeDropdown === openDropdown
        ? setActiveDropdown("")
        : setActiveDropdown(openDropdown);
  }

  const obj1 = {
    title: "Foods",
    content: ["Placeholder", "Placeholder", "Placeholder"],
  };

  const dropDownObjectEx = [obj1, obj1, obj1, obj1];

  const obj2 = {
    title: "Products",
    content: ["Something", "Something", "Something"],
  };
  const dropDownObjectEx2 = [obj2, obj2, obj2, obj2];

  return (
    <>
      <div className={styles.NavBar}>
        <NavButton
          style={styles.navButton}
          text="Foods"
          handleClick={() => toggleDropdown("Foods")}
          image="/images/chevron-down.svg"
        />
        <NavButton
          style={styles.navButton}
          text="Products"
          handleClick={() => toggleDropdown("Products")}
          image="/images/chevron-down.svg"
        />
        <NavButton style={styles.navButton} text="Deals" isLink={true} />
      </div>

      <MegaMenu
        dropDownObject={dropDownObjectEx}
        show={activeDropdown === "Foods"}
      />
      <MegaMenu
        dropDownObject={dropDownObjectEx2}
        show={activeDropdown === "Products"}
      />
    </>
  );
}
