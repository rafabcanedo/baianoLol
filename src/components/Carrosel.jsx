import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCards, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";

import img1 from '../assets/baianalista1.png';
import img2 from '../assets/baianalista2.jpg';
import img3 from '../assets/baianalista3.jpg';
import img4 from '../assets/baianalista4.jpg';
import img5 from '../assets/baianalista5.jpg';

const Container = styled.div`
 width: 25vw;
 height: 70vh;

 .swiper {
  width: 100%;
  height: 100%;
 }

 .swiper-slide {
  background-color: var(--amarelo);
  
  display: flex;
  justify-content: center;
  align-items: center;
 }
`;

function Carrosel() {
  return (
   <Container>
    <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={img1} alt="baianalista" /> </SwiperSlide>
        <SwiperSlide> <img src={img2} alt="baianalista" /> </SwiperSlide>
        <SwiperSlide> <img src={img3} alt="baianalista" /> </SwiperSlide>
        <SwiperSlide> <img src={img4} alt="baianalista" /> </SwiperSlide>
        <SwiperSlide> <img src={img5} alt="baianalista" /> </SwiperSlide>
    </Swiper>
   </Container>
  )
}

export default Carrosel;


/*

--------------- Dúvida --------------

* Editar os tamanhos das imagens

* Styles container swiper para caber as imagens

*/

/*
<Swiper
        autoplay={{
         delay: 2000,
         disableOnInteraction: false,
        }}
        pagination={{
         type: 'fraction',
        }}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
*/