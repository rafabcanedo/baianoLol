import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { List, X } from "phosphor-react";

import LogoNav from "../LogoNav";

const Section = styled.section`
 width: 100vw;
 background-color: var(--background);
`;

const Nav = styled.nav`
 display: flex;
 justify-content: space-between;
 align-items: center;

 width: 85%;
 height: 5em;
 margin: 0 auto;
`;

const Menu = styled.ul`
 display: flex;
 justify-content: space-between;
 align-items: center;
 list-style: none;
`;

const MenuItem = styled.li`
 margin: 0 1rem;
 color: var(--azul-dark);
 cursor: pointer;

 &::after {
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: var(--azul-dark);
  transition: width 0.3s ease;
 }

 &:hover::after {
  width: 100%;
 }
`;

const NavBar = () => {  
 return(
  <Section>
    <Nav>
     <LogoNav />
     <Menu>      
       <Link to="/">
       <MenuItem>Home</MenuItem>
       </Link>

       <Link to="/sobre">
       <MenuItem>Sobre</MenuItem>
       </Link>

       <Link to="/baianalista">
       <MenuItem>Baianalista</MenuItem>
       </Link>

       <Link to="/sociais">
       <MenuItem>Sociais</MenuItem>
       </Link>
     </Menu>
    </Nav>
  </Section> 
 );
}

export default NavBar;