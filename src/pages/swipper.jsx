
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function Swipper() {
  return (
    <div className='container mt-5'>  <Swiper
    pagination={{
      type: 'fraction',
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >
    <SwiperSlide>Swipper 1</SwiperSlide>
    <SwiperSlide>Swipper 2</SwiperSlide>
    <SwiperSlide>Swipper 3</SwiperSlide>
    <SwiperSlide>Swipper 4</SwiperSlide>
    <SwiperSlide>Swipper 5</SwiperSlide>
    <SwiperSlide>Swipper 6</SwiperSlide>
    <SwiperSlide>Swipper 7</SwiperSlide>
    <SwiperSlide>Swipper 8</SwiperSlide>
    <SwiperSlide>Swipper 9</SwiperSlide>
  </Swiper></div>
  )
}

export default Swipper