import React from 'react';
import styled from 'styled-components';

import Avatar from '../assets/TalkShow.png';

const AvatarContainer = styled.div`
 width: 100%;
 image{
     width: 100%;
     height: auto;
 }
 @media (max-width: 64em) {
   min-width: 40vh;
 }
`

const HomeAvatar = () => {
  return (
    <AvatarContainer>
     <img src={Avatar} />
    </AvatarContainer>
  )
}

export default HomeAvatar;