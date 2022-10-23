import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';


const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display:flex;
    justify-content:space-between;

    .logo{
        padding: 15px 0;
         
    }
      @media (max-width: 400px) {
        align-items: flex-start;
        justify-content: flex-start;
       
      }
      
  `

function Navbar() {
  return (
    <Nav>
        <div className ='logo'>
              ATSLabs
          </div>
        <Burger/>
    </Nav>
  )
}

export default Navbar