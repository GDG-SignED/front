import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "./css/SlideBanner.css";

function SlideBanner() {
  return (
    <>
      <Swiper className="mySwiper"
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 6000, // 슬라이드 간의 지연 시간 (밀리초 단위)
        disableOnInteraction: false, // 사용자가 슬라이드를 건드린 후에도 자동 재생 계속
      }}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}

export default SlideBanner;