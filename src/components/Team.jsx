import React from 'react';
import styled from 'styled-components';

import img1 from '../assets/baianochique.png';
import img2 from '../assets/esabaianalista.png';
import img3 from '../assets/jukesbaianalista.png';
import img4 from '../assets/brucerbaianalista.png';
import img5 from '../assets/revoltabaianalista.png';
import img6 from '../assets/minervabaianalista.png';

const Section = styled.section`
 min-height: 100vh;
 width: 100vw;
 background-color: #141927;
 position: relative;
`;

const Title = styled.h1`
 font-size: 3em;
 text-transform: capitalize;
 color: var(--white);
 display: flex;
 justify-content: center;
 align-items: center;
 margin: 1rem auto;
 border-bottom: 2px solid var(--white);
 width: fit-content;
`;

const Container = styled.div`
 width: 75%;
 margin: 2rem auto;

 display: flex;
 justify-content: space-around;
 align-items: center;
 flex-wrap: wrap;
`;

const Item = styled.div`
 width: calc(20rem - 4vw);
 padding: 1rem 0;
 color: var(--background);
 margin: 2rem 1rem;
 position: relative;
`;

const ImageContainer = styled.div`
 width: 15rem;
 margin: 0 1rem;
 background-color: var(--amarelo);

 border-radius: 20px;
 cursor: pointer;

 img {
  width: 100%;
  height: auto;
 }
`;

const Name = styled.h2`
 font-size: 1.25em;
 display: flex;
 align-items: center;
 justify-content: center;
 text-transform: uppercase;
 color: var(--white);
 margin-top: 1rem;
`;

const Position = styled.h2`
 font-size: 1em;
 display: flex;
 align-items: center;
 justify-content: center;
 text-transform: uppercase;
 color: var(--white);
 margin-top: 1rem;
`;

const MemberComponent = ({img, name=" ",position=" "}) => {
 return(
  <Item>
    <ImageContainer>
      <img src={img} alt={name} />
    </ImageContainer>
    <Name>{name}</Name>
    <Position>{position}</Position>
  </Item>
 );
}

const Team = () => {
 return(
  <Section>
    <Title>Team</Title>
    <Container>
     <MemberComponent img={img1} />
     <MemberComponent img={img1} />
     <MemberComponent img={img1} />
     <MemberComponent img={img1} />
     <MemberComponent img={img1} />
     <MemberComponent img={img1} />
    </Container>
  </Section>
 );
}

export default Team;