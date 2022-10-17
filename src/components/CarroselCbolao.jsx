import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from "swiper/react";

import { EffectCards, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";

import eternosF from '../assets/eternos.jpg';
import excnb from '../assets/EXNB.png';
import loudinhos from '../assets/loudinhos.png';
import fullClear from '../assets/fullclear.png';
import politicagem from '../assets/politicagem.png';
import geracao2000 from '../assets/geracao.png';
import Kings from '../assets/mill7.png';
import batcaverna from '../assets/batcaverna.png';

const Container = styled.div`
 width: 100%;
 height: 70vh;
 padding-top: 30px;

 .swiper {
  width: 80%;
  height: 90%;
 }

 .swiper-slide {
  background-color: transparent;
  
  display: flex;
  justify-content: center;
  align-items: center;
 }
`;

function CarroselCbolao() {
  return (
   <Container>
    <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide> <img src={eternosF} alt="baianalista" /> </SwiperSlide>
        <SwiperSlide> <img src={excnb} alt="baianalista" /> </SwiperSlide>
        <SwiperSlide> <img src={loudinhos} alt="baianalista" /> </SwiperSlide>
        <SwiperSlide> <img src={fullClear} alt="baianalista" /> </SwiperSlide>
        <SwiperSlide> <img src={politicagem} alt="baianalista" /> </SwiperSlide>
        <SwiperSlide> <img src={geracao2000} alt="baianalista" /> </SwiperSlide>
        <SwiperSlide> <img src={Kings} alt="baianalista" /> </SwiperSlide>
        <SwiperSlide> <img src={batcaverna} alt="baianalista" /> </SwiperSlide>
    </Swiper>
   </Container>
  )
}

export default CarroselCbolao;