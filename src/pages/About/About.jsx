import React from "react";
import './About.css';

import CarroselCbolao from "../../components/CarroselCbolao";

import HomeAvatar from "../../components/HomeAvatar";
import PhotoSobre from "../../components/PhotoSobre";
import TalkShow from "../../components/TalkShow";

import doacao from "../../assets/doacao.png";
import times from "../../assets/times.png";
import view from "../../assets/views.png";
import trending from "../../assets/trending.png";

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
    Baiano jogou algumas competições menores de Dota na região em que vivia. <br />
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
    
      <br />
      <br />

     <div className="previa-cbolao2">
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

      <CarroselCbolao />

      <div className="row-cbolao">
       <div className="col-6 pt-3">
       <p>
         <img src={doacao} alt="" />
       </p>
       <p className="p-rows">
         +250 MIL
         <br />
         EM DOAÇÕES
       </p>
       </div>

       <div className="col-6 pt-3">
       <p>
        <img src={times} alt="" />
       </p>
       <p className="p-rows">
       +1 MIL
         <br />
         TIMES INSCRITOS    
       </p>
       </div>

       <div className="col-6 pt-3">
       <p>
       <img src={view} alt="" />
       </p>
       <p className="p-rows">
         +193 MIL
         <br />
         PICO DE AUNDIÊNCIA
       </p>
       </div>

       <div className="col-6 pt-3">
       <p>
       <img src={trending} alt="" />
       </p>
       <p className="p-rows">
         #TRENDING TOPICS
         <br />
         EM TODAS AS EDIÇÕES
       </p>
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

    <section className="section-talkshow">
    <div className="container-sobre2">
   
   <div className="box-sobre2">
  <h2 className="inicio-comp">
    Play Night
  </h2>
  <br />
   <span className="text-2-sobre">
    Baiano, em seu programa Play Night recebe convidados personalidades
    do cenário de League Of Legends e convidados especiais que também
    estão ligados á comunidade.
    A primeira temporada do programa conta com 12 episódios, que serão feitos 
    nos estúdios do grupo de entretenimento de esports BBL e transmitidos no canal do 
    influenciador na Twitch.
    <br />
    <br />
    O talk show é focado em conteúdos descontraídos, entrevistas e quadros especiais
    tudo relacionado ao cenário.
    Os episódios são ao vivos e o público pode participar de alguma forma. Caso perca 
    algum episódio confira o Vod ou os Cortes abaixo.
   </span>
   </div>

    <div className="box-sobre">
     <TalkShow />
   </div>
   </div>
   
   
   <div className="button-redes">
   <a href="https://www.youtube.com/channel/UCtVc_PQ39arpgQBeXQRw4Cw/featured" target="_blank">
   <button className="button-playtwitch">
    Twitch
   </button>
   </a>

   <a href="https://www.youtube.com/channel/UCtVc_PQ39arpgQBeXQRw4Cw/featured" target="_blank">
   <button className="button-playtube">
    Youtube
   </button>
   </a>
   </div>
    </section>
   </>
 );
}

export default About;