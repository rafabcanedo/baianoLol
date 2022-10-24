import React from "react";
import './Home.css';

import TypeWriterText from "../../components/TypeWriteText";
import Carrosel from "../../components/Carrosel";

import background from '../../assets/layout.png';
import { CoinVertical } from "phosphor-react";

function Home() {
 return(
  <section className="home-section" id="home">
   <div style={{ 
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '30% 45%',
    backgroundSize: 'cover',
    }}>
   <div className="home-container">
    <div className="box-home">
     <TypeWriterText />
    </div>

   </div>
   </div>
   
   <div className="cbolao-title">
     <h1>Baianalista</h1>  
   </div>
   <div className="cbolao-container">
   <div className="box-home">
     <Carrosel />
   </div>

   <div className="box-home">
    <h2 className="title-baianalista">
      Baiano e suas calls
    </h2>
    <p className="subtext-baianalista">
     Baianalista é um programa onde Baiano, Esa e convidados acompanham
     o campeonato brasileiro e o mundial de League Of Legends
    </p>
    <h4 className="subtext-baianalista-light">
      Além de acompanhar, comentar e discutir jogadas eles focam em lucrar
      com apostas durante as partidas do campeonato
    </h4>
   </div>
   </div>
  </section>
 );
}

export default Home;

/*
<div className="box-home">
     <HomeAvatar />
    </div>
*/