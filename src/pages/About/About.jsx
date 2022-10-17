import React from "react";
import './About.css';

import HomeAvatar from "../../components/HomeAvatar";

import PhotoSobre from "../../components/PhotoSobre";

import eternosF from '../../assets/eternos.jpg';
import excnb from '../../assets/EXNB.png';
import loudinhos from '../../assets/loudinhos.png';
import fullClear from '../../assets/fullclear.png';
import politicagem from '../../assets/politicagem.png';
import geracao2000 from '../../assets/geracao.png';
import Kings from '../../assets/mill7.png';
import batcaverna from '../../assets/batcaverna.png';

function About() {
 return(
  <>
  <section className="section-sobre">
  {/* <div className="sobre-title">
    <h1>Sobre Mim</h1>
 </div> */}
   <div className="container-sobre">
    
    <div className="box-sobre">
    <h2 className="text-intro-sobre">
    Gustavo "Baiano" Gomes é um dos maiores streamers do Brasil na Twitch.
    </h2>
    <br />
    <span className="span-sobre">
    Com foco principalmente em League Of Legends, ele se consilidou no cenário
    com craição de diversos projetos.
    O destaque fica para a ideialização do CBOLÃO, um torneio
    que reuniu milhares de espectadores e angariou muitas doações para a 
    caridade.
    </span>
    </div>
    <div className="box-sobre">
     <HomeAvatar />
    </div>
    </div>
    </section>

   <section className="section-mais">

   <div className="container-sobre2">
   <div className="box-sobre">
     <PhotoSobre />
   </div>
   

   <div className="box-sobre">
  <h2 className="inicio-comp">
    Inicio Competitivo
  </h2>
  <br />
   <span className="text-2-sobre">
    Antes de ser stremear, Baiano foi jogadior profissional
    de League Of Legends e contou com uma tragetória de muita superação 
    durante toda sua carreira.
    Nascido no estado da Bahia,Baiano viveu uma boa parte de sua vida
    em Recife, Pernambuco. Vindo de uma família humilde, ele sempre sofreu
    bastante pressão dos pais para fazer faculdade e ter um bom futuro. <br />
    <br />
    Finalizou o ensino médio com apenas 15 anos e logo teve que decidir a carreira que seguiria,
    Ao tentar entrar em uma faculdade federal, Baiano foi aprovado em três cursos e escolheu Engenharia Ambiental para iniciar seus estudos no ensino superior. 
    Infelizmente, ele percebeu que não era aquilo que gostaria de fazer e começou a entrar em um dilema.
    Baiano jogou algumas competições menores de DotA na região em que vivia. <br />
    <br />
    Esses torneios ofereciam premiações pequenas,
    mas que o ajudavam a mostrar à família que o jogo poderia lhe dar algum dinheiro. 
    Porém, não demorou para perceber que o primeiro Dota não daria futuro e que havia outra opção 
    ganhando a atenção no League of Legends. 
    Ele realizou a transição para o título da Riot Games e, graças à experiência que possuía no DotA, 
    aprendeu a jogar muito rápido e não teve dificuldades em se destacar nas filas ranqueadas.
   </span>
    </div>
    </div>
    </section>

    <section className="section-cbolao">
     <div className="title-cbolao">
       <h1 className="h1-cbolao">
        Cbolão
       </h1>
     </div>

      <h3 className="h3-cbolao">
      O maior campeonato Brasileio de League Of Legends
      </h3>

     <div className="previa-cbolao">
      <span className="span-cbolao">
      Maior torneio amador de League of Legends do mundo, o CBOLÃO surgiu da ideia do streamer e ex-jogador <br />
      Gustavo "Baiano" Gomes de unir diversão, competitividade e inclusão no cenário de LOL brasileiro. 
      <br />
      O evento reúne os maiores jogadores e personalidades do cenário de eSports nacional e internacional 
      para um campeonato que se tornou palco de histórias que marcaram para sempre o cenário de League of Legends no Brasil, 
      revelando novos talentos e unindo esforços em prol de ações 
      beneficentes que impactam diretamente nossa sociedade.
      </span>
     </div>

     <div className="container-cbolao">
     <button class="arrow-left control" aria-label="Previous image">◀</button>
     <button class="arrow-right control" aria-label="Next Image">▶</button>
      <div className="gallery-wrapper">
       <div className="gallery">
        <img src={eternosF} alt="" className="item-current"/>
        <img src={excnb} alt="" className="item-current" />
        <img src={loudinhos} alt="" className="item-current" />
        <img src={fullClear} alt="" className="item-current" />
        <img src={politicagem} alt="" className="item-current" />
        <img src={geracao2000} alt="" className="item-current" />
        <img src={Kings} alt="" className="item-current" />
        <img src={batcaverna} alt="" className="item-current" />
       </div>
      </div>
     </div>

     <div className="container-button">
      <a href="https://cbolao.gg" target="_blank">
      <button className="button-cbolao">
       Saber Mais
      </button>
      </a>
     </div>
    </section>
   </>
 );
}

export default About;