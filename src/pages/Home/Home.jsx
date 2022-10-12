import React from "react";
import './Home.css';

import TypeWriterText from "../../components/TypeWriteText";
import HomeAvatar from "../../components/HomeAvatar";
import Carrosel from "../../components/Carrosel";

function Home() {
 return(
  <section className="home-section">
   <div className="home-container">
    
    <div className="box-home">
     <TypeWriterText />
    </div>

    <div className="box-home">
     <HomeAvatar />
    </div>
   </div>

   <div className="cbolao-title">
     <h2>Baianalista</h2>  
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