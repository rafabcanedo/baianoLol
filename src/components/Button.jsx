import React from "react";
import styled from 'styled-components';

const Btn = styled.button`
 height: 50px;
 border: 0;
 font-weight: bold;
 padding: 10px 32px;
 background: var(--black);
 color: var(--white);
 border-radius: 2px;
 cursor: pointer;
`;

const Button = ({text, link}) => {
 return(
     <Btn>
       <a href={link} arial-label={text}>
        {text}
       </a>
     </Btn>
    );
   }
   
export default Button;