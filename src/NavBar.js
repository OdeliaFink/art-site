import React, { useState } from 'react';
import styled from 'styled-components';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: grey;
  opacity: 0.5;
  color: white;
  padding: 20px;
  position: fixed;
  height: 5rem;

  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;

const NavItem = styled.a`
  text-decoration: none;
  color: black;
  margin: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavigationBar = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const toggleNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };

  return (
    <React.Fragment>
      <NavContainer>
        <NavMenu>
          <NavItem href="/">Home</NavItem>
          <HamburgerIcon onClick={toggleNavMenu}>☰</HamburgerIcon>
        </NavMenu>
        <NavMenu>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/contact">Contact</NavItem>
        </NavMenu>
      </NavContainer>
      {/* <div style={{ borderBottom: '10px solid black' }} /> */}
    </React.Fragment>
  );
};

export default NavigationBar;
