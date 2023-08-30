import React from 'react';
import styled from 'styled-components';
import './index.css'



const HeaderContainer = styled.header`
background-color:#333;
color:#fff;
text-align:center;
padding:1rem;
position:sticky;
top:0px;
z-index:100;
`;


const Header = () => {
  return (
    <HeaderContainer>
      <h1>My Blog</h1>
    </HeaderContainer>
  );
};

export default Header;
