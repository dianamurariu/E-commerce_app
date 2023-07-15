import styles from './grid-layout.module.css';

const GridLayout = ({ children }) => {
    return (
      <div className={styles.container__grid}>
        {children}
      </div>
    )
};
  
 export default GridLayout;