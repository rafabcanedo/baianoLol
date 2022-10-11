import React, { useState } from "react";
import './NavBar.css';
import { Link } from "react-router-dom";
import { List, X } from "phosphor-react";

const NavBar = () => {
  
  const [ Mobile, setMobile ] = useState(false)

 return(
  <nav className="navbar-container">
   <h3 className="logo-nav">
    Logo
   </h3>

   <ul className={Mobile ? "nav-link-mobile" : "nav-links"} onClick={() => setMobile(false)}>
    
    <Link to='/'>
    <li>Home</li>
    </Link>

    <Link to='/sobre'>
    <li>Sobre</li>
    </Link>

    <Link to='/projetos'>
    <li>Projetos</li>
    </Link>

    <Link to='/sociais'>
    <li>Sociais</li>
    </Link>

   </ul>

   <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
    {Mobile? <X size={32} color="#FFFFFF" /> : <List size={32} color="#FFFFFF" />}
   </button>
  </nav>
 );
}

export default NavBar;