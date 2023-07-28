import React, { useRef, useState } from 'react';
// Import Swiper React components
import {  Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules';

export default function slider() {
  return (
    <>
      <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}

        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          '--swiper-Autoplay-color': '#fff',
          height:"700px",
          marginTop:"-150px"
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            'background-image':
              'url(https://www.tekiano.com/wp-content/uploads/2021/10/zarzis-smart-center.jpg)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          RESEAUX DE COMMUNICATIONS MODERNES
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
           
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
            
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          EQUIPEMENTS
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
          
          </div>
          <div className="text" data-swiper-parallax="-100">
          
             
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
          OFFRIR DES ESPACES FONCTIONNELS
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
           
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
             
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
