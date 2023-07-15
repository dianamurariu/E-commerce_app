import styles from './category-grid.module.css';
import CategoryLarge from './category-large';
import CategorySmall from './category-small';

export default function CategoryGrid() {
    return(
        <div className={styles.wrapper_category_grid}>
            <div className="container">
                <div className={styles.container__inner}>

                    <div >
                        <CategoryLarge text="Lorem ipsum dolor sit amet, consectetur" btnText="from 8.90€" />
                    </div>

                    <div className={styles.container_category_small}>
                        <div >
                            <CategorySmall text="Lorem ipsum dolor sit amet, consectetur" btnText="Check it out" btnDark={true} />
                        </div>

                        <div >
                            <CategorySmall text="Lorem ipsum dolor sit amet, consectetur" btnText="Check it out" btnDark={true} />
                        </div>
                    </div>

                    <div className={styles.container_category_small}>
                        <div >
                            <CategorySmall text="Lorem ipsum dolor sit amet, consectetur" btnText="from 8.90€" btnDark={false} />
                        </div>
                        
                        <div >
                            <CategorySmall text="Lorem ipsum dolor sit amet, consectetur" btnText="from 8.90€" btnDark={false} />
                        </div>
                    </div> 
                </div>   
            </div>
        </div>
    )
}
