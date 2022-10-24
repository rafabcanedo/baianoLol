import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
 font-size: 3em;
 transform: capitalize;
 width: 80%;
 color: var(--white);
 align-self: flex-start;
 span{
 text-transform: uppercase;
 //font-family: "Oswald", sans-serif;
 }

 @media (max-width: 70em) {
   font-size: 2em;
 }
 @media (max-width: 48em) {
   align-self: center;
   text-align: center;
 }
 @media (max-width: 40em) {
   width: 90%;
 }
`;

const SubTitle = styled.h3`
 font-family: "Oswald", sans-serif;
 font-size: 1.25em;
 //text-transform: capitalize;
 color: var(--white);
 font-weight: 600;
 margin-bottom: 1rem;
 width: 80%;
 align-self: flex-start;
 @media (max-width: 40em) {
   font-size: 1em;
 }
 @media (max-width: 48em) {
   align-self: center;
   text-align: center;
 }
`;

const TypeWriterText = () => {
    return (
    <>
     <Title>
        Olá, eu sou o Baiano,
    </Title>
    <br />
      <SubTitle>
      Pro Player de League Of Legends por mais de 5 anos, primeiro jogador brasileiro
      a jogar fora do país. Desenvolvi o melhor campeonato de lol do mundo,
      o Cebolão e o projeto Baianalista trazendo alegria e diversão a voces!
      </SubTitle>
    </>
    )
}

export default TypeWriterText;