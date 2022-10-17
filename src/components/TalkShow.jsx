import React from 'react';
import styled from 'styled-components';

import talkshow from '../assets/talkshow2.png';

const AvatarContainer = styled.div`
 position: absolute;
 right: 10%;
 width: 510px;
 img{
     width: 100%;
     height: auto;
 }
 @media (max-width: 64em) {
   min-width: 40vh;
 }
`

const TalkShow = () => {
  return (
    <AvatarContainer>
     <img src={talkshow} />
    </AvatarContainer>
  )
}

export default TalkShow;