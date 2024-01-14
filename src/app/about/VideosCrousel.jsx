import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; // Add scrollbar style

const VideosCarousel = ({ onSwiper }) => {
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

  const handleSlideChangeTransitionEnd = () => {
    if (autoplay) {
      setAutoplay(false); // Disable autoplay after the first slide change
      if (swiperRef.current) {
        swiperRef.current.autoplay.stop();
      }

      // Pause the video when the slide changes
      const videoElement = document.querySelector(".swiper-slide-active video");
      if (videoElement && !videoElement.paused) {
        videoElement.pause();
      }
    }
  };

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ borderRadius: "10px", width: "100%", height: "100%" }}>
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
          onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {videos.map((src, idx) => (
            <SwiperSlide key={idx}>
              <video
                style={{ width: "100%", height: "100%", borderRadius: "10px", objectFit: "cover" }}
                src={src}
                title={`Video ${idx + 1}`}
                controls
                preload="auto"
                onLoadedData={handleVideoPlay}
              ></video>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VideosCarousel;
