import styles from './products.module.css';
import ProductCard from '@/components/homepage/product-slider/product-card';
import data from '../products-listing.json';

export default function Products(props) {
  const cards = data.productTabs[0].items; 
  const { id, img, discount, title, originalPrice, currPrice } = props;

  return (
    <div className={styles.grid_container}>
      {cards.map((card, id) => (
        <div key={id}>
          <ProductCard
            id={card.id}
            img={card.img}
            title={card.name}
            originalPrice={card.price}
            currPrice={card.price}
            discount={card.discount}
          />
        </div>
      ))}
    </div>
  );
}

// import styles from './products.module.css';
// import data from '../products-listing.json';
// import ProductCard from '../../homepage/product-slider/product-card';

// export default function Products() {
//   const productTab = data.productTabs[0]; 

//   if (!productTab) {
//     return null;
//   }

//   return (
//     <div className={styles.grid_container}>
//       {productTab.items.map((card, index) => (
//         <ProductCard
//           id={id}
//           key={index}
//           img={card.img}
//           title={card.name}
//           original_price={card.price}
//           current_price={card.price}
//           discount={card.discount}
//         />
//       ))}
//     </div>
//   );
// }




