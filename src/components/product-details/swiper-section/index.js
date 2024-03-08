import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function SwiperSection() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const imageUrls = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
  ];

  return (
    <div className="details_slider">
      {thumbsSwiper && (
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={false}
          thumbs={thumbsSwiper}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {imageUrls.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <img src={imageUrl} alt="image" />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {imageUrls.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <img src={imageUrl} alt="image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
