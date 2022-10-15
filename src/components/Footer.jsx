import React from 'react';
import styled from 'styled-components';
import Logo from './LogoNav';

import { InstagramLogo, TwitterLogo , TwitchLogo, YoutubeLogo } from 'phosphor-react';

const Section = styled.section`
 margin-top: 4rem;
 padding: 4rem;
 background-color: #ecf0f3;
 position: relative;
 color: #000;
 left: 0;
 width: 100%;
 display: flex;
 flex-direction: column;
`;

const Container = styled.div`
 width: 75%;
 margin: 2rem auto;
 display: flex;
 justify-content: space-between;
 align-items: center;
 border-bottom: 1px solid #000;

 h1 {
    font-size: 4em;
 }
`;

const Left = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 @media (max-width: 48em) {
    width: 100%;
 }
`;

const IconList = styled.div`
 display: flex;
 align-items: center;
 margin: 1rem auto;
 &>* {
    padding-right: 0.5rem;
    transform: all 0.2s ease;
    &:hover {
        transform: scale(1.2);
    }
 }
`;

const MenuItems = styled.ul`
 list-style: none;
 width: 50%;
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 grid-template-rows: repeat(3, 1fr);
 grid-gap: 1rem;
 @media (max-width: 48em) {
   display: none;
 }
`

const Item = styled.li`
 width: fit-content;
 cursor: pointer;
 &::after {
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background:  ${props => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after{
    width: 100%;
  }
`

const Bottom = styled.div`
 width: 75%;
 margin: 0 auto;
 display: flex;
 justify-content: space-between;
 align-items: center;
 a{
     text-decoration: underline;
 }
 @media (max-width: 48em) {
   flex-direction: column;
   width: 100%;
   span {
     margin-bottom: 1rem;
   }
 }
`

const Footer = () => {
 return(
  <Section>
    <Container>
     <Left>
      <Logo />
        <IconList>
        <a href='https://www.instagram.com/baianolol/' target='_blank'
        rel='nooperner'
        >
        <InstagramLogo />
        </a>
        <a href='https://www.twitch.tv/baiano' target='_blank'
        rel='nooperner'
        >
        <TwitchLogo />
        </a>
        <a href='https://www.youtube.com/c/CortesdoBaiano/featured' target='_blank'
        rel='nooperner'
        >
        <YoutubeLogo />
        </a>
        <a href='https://twitter.com/baianolol1' target='_blank'
        rel='nooperner'
        >
        <TwitterLogo />
        </a>
        </IconList>
     </Left>
      <MenuItems>
       <Item>Home</Item>
       <Item>Aplicacoes</Item>
       <Item>Sobre Nós</Item>
       <Item>Login</Item>
      </MenuItems>
    </Container>
    <Bottom>
        <span>
        &copy; {new Date().getFullYear()} Canedo. All rights reserved.
        </span>
    </Bottom>
  </Section>
 );
}

export default Footer;