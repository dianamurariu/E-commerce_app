import styles from './button-add.module.css'

export default function ButtonAdd({ btncolor }) {
    let buttonClass = '';
  
    if (btncolor === 'dark') {
      buttonClass = `${styles.btnAdd} ${styles.btnAddDark}`;
    } else if (btncolor === 'light') {
      buttonClass = `${styles.btnAdd} ${styles.btnAddLight}`;
    }
  
    return <button className={buttonClass}></button>;
  }
