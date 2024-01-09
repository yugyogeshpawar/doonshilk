
"use client";


import rightImg from "@/images/hero-right1.png";
import React from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import BgGlassmorphism from "@/components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionHero from "./SectionHero";
import SectionClientSay from "@/components/SectionClientSay/SectionClientSay";
import SectionPromo3 from "@/components/SectionPromo3";
import HeaderTitle from './HeaderTitle';

//import SectionVideo from "./SectionVideos"
import Crousal from "../Crousal/page";
import { PageHome } from "../page";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';






const VideosCrousel = () => {

  const videos = ['https://www.youtube.com/embed/pcZivOPnsJU', 'https://youtu.be/OQ-VhlrZCjk?si=jlHaOfGJNh4k1YCe'];

  const [play, setPlay] = React.useState(true);




  return (

    <div className="relative overflow-hidden">
      <div className="rounded w-full  h-[240px] md:h-[420px] lg:h-[640px]">

        <Swiper
          className="w-full h-full"
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
        >
          <SwiperSlide>
            <iframe
              className="w-full h-full absolute rounded object-cover"
              src={'https://www.youtube.com/embed/pcZivOPnsJU'}
              title="YouTube Video"
              allowFullScreen
            ></iframe>
          </SwiperSlide>

          <SwiperSlide>
            <iframe
              className="w-full h-full rounded object-cover"
              src={'https://www.youtube.com/embed/OQ-VhlrZCjk'}
              title="YouTube Video"
              allowFullScreen
            ></iframe>
          </SwiperSlide>


          {/* {
             videos.map((src, idx) => {
             })
           } */}
        </Swiper>

      </div>
    </div>
  );
}


const PageAbout = ({ }) => {

  return (
    <div className={`nc-PageAbout overflow-hidden relative`}>
      {/* ======== BG GLASS ======== */}

      <BgGlassmorphism />
      <Crousal
      />

      <div className="pt-2 ">
        <HeaderTitle />
      </div>

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">


        <VideosCrousel />
        {/* <div className="relative overflow-hidden">
          <div className="aspect-w-16 aspect-h-9 rounded">
            <iframe
              className="w-full h-full absolute top-0 left-0 rounded"
              src={'https://www.youtube.com/embed/pcZivOPnsJU'}
              title="YouTube Video"
              allowFullScreen
            ></iframe>
          </div>
        </div> */}
        {/* <SectionVideo/> */}
        <SectionHero
          rightImg={rightImg}
          heading="👋 About Us."
          btnText=""
          subHeading="

          After the Creation of Uttarakhand state in November 9, 2000 as 27 state of India. It was felt by Govt. of Uttarakhand that vide extension of sericulture in all over the state it is necessary to establish a separate Directorate.Through which DOS Uttarakhand can generate the employment opportunities for unemployed people as well as up-liftmen of the socio economic condition of rural people in the state. After some time in year 2001 A separate Directorate of Sericulture Uttarakhand was established in the state by Govt. of Uttarakhand under the Ministry of Horticulture.
          
          Since inception DOS Uttarakhand was already a vast infrastructure for development of various type of sericulture in the state.But a newly created Uttarakhand state has a long traditional and great history of silk production.
         "
        />

        <SectionFounder />
        <div className="relative py-16">
          <BackgroundSection />
          {/* <SectionClientSay /> */}
        </div>

        <SectionStatistic />

        {/* <div className="flex flex-wrap shadow-lg">
          <iframe className="m-auto" name="f1b4a881d42795" width="632px" height="500px" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v18.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfcf7784493df0c%26domain%3Diframely.net%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fiframely.net%252Ff2d06cca3d6ae28%26relation%3Dparent.parent&amp;container_width=0&amp;height=500&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FDOONSILK&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=false&amp;show_posts=true&amp;small_header=false&amp;width=632" />
        
          <iframe class="m-auto w-[300px] md:w-[600px] h-[600px] instagram-media instagram-media-rendered" id="instagram-embed-1" src="https://www.instagram.com/doon.silk/embed/?cr=1&amp;v=12&amp;wp=540&amp;rd=https%3A%2F%2Fwww.instaembedcode.com&amp;rp=%2F#%7B%22ci%22%3A1%2C%22os%22%3A18995.20000000298%2C%22ls%22%3A8454.89999999106%2C%22le%22%3A8923.5%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" data-instgrm-payload-id="instagram-media-payload-1" scrolling="no" />
        </div> */}

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.527405645236!2d77.96277967556495!3d30.33595767477822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b5ca23b57c3%3A0x22913355728bbfce!2sDOON%20SILK!5e0!3m2!1sen!2sin!4v1699033595448!5m2!1sen!2sin" width="600" height="450" style={{ border: '0px' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        {/* <SectionPromo3 /> */}
      </div>
    </div>
  );
};


export default PageAbout;