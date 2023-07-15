import styles from './button-add.module.css';

export default function ButtonAdd( { btncolor } ) {
    return (
      <>
        {btncolor === 'dark'? <button className = {`${styles.btnAdd} ${styles.btnAddDark}`} /> : "" }
        {btncolor === 'light'? <button className = {`${styles.btnAdd} ${styles.btnAddLight}`} /> : "" }
      </>
    )
}