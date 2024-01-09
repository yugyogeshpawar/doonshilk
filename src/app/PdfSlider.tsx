import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './image.css'
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import category1 from './Category/category1.jpg';
import category2 from './Category/category2.jpg';
import category3 from './Category/category3.jpg';
import category4 from './Category/category4.jpg';
import category5 from './Category/category5.jpg';
import category6 from './Category/category6.jpg';
import category7 from './Category/category7.jpg';
import category8 from './Category/category8.jpg';
import category9 from './Category/category9.jpg';
import category10 from './Category/category10.jpg';
import category11 from './Category/category11.jpg';
import category12 from './Category/category12.jpg';
import category13 from './Category/category13.jpg';
import category14 from './Category/category14.jpg';
import category15 from './Category/category15.jpg';
import category16 from './Category/category16.jpg';
import category17 from './Category/category17.jpg';
import category18 from './Category/category18.jpg';
import category19 from './Category/category19.jpg';
import category20 from './Category/category20.jpg';
import category21 from './Category/category21.jpg';
import category22 from './Category/category22.jpg';
import category23 from './Category/category23.jpg';
import category24 from './Category/category24.jpg';
import category25 from './Category/category25.jpg';
import category26 from './Category/category26.jpg';
import category27 from './Category/category27.jpg';
import category28 from './Category/category28.jpg';
import category29 from './Category/category29.jpg';
import category30 from './Category/category30.jpg';
import category31 from './Category/category31.jpg';
import category32 from './Category/category32.jpg';
import category33 from './Category/category33.jpg';
import category34 from './Category/category34.jpg';
import category35 from './Category/category35.jpg';
import category36 from './Category/category36.jpg';
import category37 from './Category/category37.jpg';


import Image from 'next/image';
const ImageSlider: React.FC = () => {


  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className=""
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >

      <SwiperSlide ><Image src={category1} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category2} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category3} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category4} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category5} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category6} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category7} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category8} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category9} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category10} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category11} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category12} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category13} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category14} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category15} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category16} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category17} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category18} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category19} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category20} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category21} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category22} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category23} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category24} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category25} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category26} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category27} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category28} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category29} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category30} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category31} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category32} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category33} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category34} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category35} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category36} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>
      <SwiperSlide ><Image src={category37} alt="Category" style={{ minWidth: '100vw', height: 'auto', maxHeight: "85vh" }} />  </SwiperSlide>


    </Swiper>
  );
};

export default ImageSlider;
