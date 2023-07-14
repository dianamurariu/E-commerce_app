import styles from './mega-menu.module.css';
import List from '../nav-list';


export default function MegaMenu( {dropDownObject, show} ) {

  
    return (
      <div className= { show ? `${styles.megMenu__container} ${styles.show}`: `${styles.megMenu__container}`}>
      <div className="container">
          <div className={`${styles.megaMenu__content} ${styles.listContainer}`}>
              {dropDownObject && dropDownObject.map((listItem) => 
              <List object={listItem} />
              )}
          </div>
        </div>
      </div>
    );
}
