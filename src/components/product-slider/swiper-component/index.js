import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import ProductCard from "../product-card";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css/effect-fade";

export default function SwiperComponent({ cards }) {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      modules={[Navigation, EffectFade]}
      navigation
    >
      {cards.map((card, index) => (
        <SwiperSlide key={index}>
          <ProductCard 
          img={card.img}
          title={card.name}
          original_price={card.price}
          current_price={card.price}
          discount={card.discount} />    
        </SwiperSlide>
      ))}
    </Swiper>
  );
};