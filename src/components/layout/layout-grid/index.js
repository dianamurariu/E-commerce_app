import styles from './layout-grid.module.css'

const GridLayout = ({ children }) => {
    return (
      <div className={styles.container__grid}>
        {children}
      </div>
    )
};
  
 export default GridLayout;