import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const VideosCrousel = ({ onSwiper }) => {
  const videos = ['https://api.doonsilk.com/image/DoonsilkProductionVideo.mp4', 'https://api.doonsilk.com/image/%E0%A4%B0%E0%A5%87%E0%A4%B6%E0%A4%AE%20%E0%A4%AB%E0%A5%87%E0%A4%A1%E0%A4%B0%E0%A5%87%E0%A4%B6%E0%A4%A8%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A5%81%E0%A4%A8%20%E0%A4%95%E0%A4%B0%20%E0%A4%A7%E0%A4%BE%E0%A4%97%E0%A5%87%20,%E0%A4%AE%E0%A4%B9%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%93%E0%A4%82%20%E0%A4%95%E0%A5%87%20%E0%A4%95%E0%A4%A6%E0%A4%AE%20%E0%A4%AC%E0%A5%9D%20%E0%A4%B0%E0%A4%B9%E0%A5%87%C2%A0%E0%A4%B9%E0%A5%88%E0%A4%82%C2%A0%E0%A4%86%E0%A4%97%E0%A5%87.mp4'];
  const swiperRef = useRef(null);
  const [autoplay, setAutoplay] = useState(true);

  const handleVideoPlay = () => {
    setAutoplay(false);
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleSwiperInit = (swiper) => {
    if (onSwiper) {
      onSwiper(swiper);
    }
    swiper.autoplay.start(); // Start autoplay initially
  };

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.autoplay && autoplay) {
      setAutoplay(false); // Disable autoplay after the first slide change
      if (swiperRef.current) {
        swiperRef.current.autoplay.stop();
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="rounded w-full h-[240px] md:h-[420px] lg:h-[640px]">
        <Swiper
          ref={(swiper) => {
            swiperRef.current = swiper;
            if (onSwiper) {
              handleSwiperInit(swiper);
            }
          }}
          className="w-full h-full"
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={handleSlideChange}
        >
          {videos.map((src, idx) => (
            <SwiperSlide key={idx}>
              <iframe
                className="w-full h-full absolute rounded object-cover"
                src={src}
                title={`YouTube Video ${idx + 1}`}
                allowFullScreen
                onLoad={handleVideoPlay}
              ></iframe>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VideosCrousel;
