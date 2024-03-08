import React from "react";
import ProductCard from "../product-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css/effect-fade";

export default function SwiperComponent({ cards }) {
  return (
    <div className="home_slider">
      <Swiper
        modules={[Navigation, EffectFade]}
        spaceBetween={33}
        slidesPerView={4}
        navigation
      >
        {cards.map(({ id, img, name, price, discount }) => (
          <SwiperSlide key={id}>
            <ProductCard
              id={id}
              img={img}
              title={name}
              originalPrice={price}
              currPrice={price}
              discount={discount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// import ProductCard from "../product-card";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, EffectFade } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/bundle";
// import "swiper/css/effect-fade";

// export default function SwiperComponent({ cards }) {
//   return (
//     <div className="home_slider">
//       <Swiper
//         modules={[Navigation, EffectFade]}
//         spaceBetween={33}
//         slidesPerView={4}
//         navigation
//       >
//         {cards.map((card, index) => (
//           <SwiperSlide key={index}>
//             <ProductCard
//               id={card.id}
//               img={card.img}
//               title={card.name}
//               originalPrice={card.price}
//               currPrice={card.price}
//               discount={card.discount}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, EffectFade } from "swiper/modules";
// import ProductCard from "../product-card";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/bundle";
// import "swiper/css/effect-fade";

// export default function SwiperComponent({ cards }) {
//   return (
//     <div className="home_slider">
//       <Swiper
//         slidesPerView={4}
//         spaceBetween={30}
//         modules={[Navigation, EffectFade]}
//         navigation
//       >
//         {cards.map((card, index) => (
//           <SwiperSlide key={index}>
//             <ProductCard
//               id={id}
//               img={card.img}
//               title={card.name}
//               original_price={card.price}
//               current_price={card.price}
//               discount={card.discount}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };
