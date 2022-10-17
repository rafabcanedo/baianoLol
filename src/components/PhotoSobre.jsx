import React from 'react';
import styled from 'styled-components';

import bairiso from '../assets/sorrisin.png';

const AvatarContainer = styled.div`
 position: absolute;
 left: 10%;
 width: 510px;
 img{
     width: 100%;
     height: auto;
 }
 @media (max-width: 64em) {
   min-width: 40vh;
 }
`

const PhotoSobre = () => {
  return (
    <AvatarContainer>
     <img src={bairiso} />
    </AvatarContainer>
  )
}

export default PhotoSobre;