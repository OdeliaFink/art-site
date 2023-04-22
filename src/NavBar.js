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
    color: red;
  }
`;
const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
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
          <NavItem>
            <SearchInput type="text" placeholder="Search..." />
          </NavItem>
        </NavMenu>
      </NavContainer>
      {/* <div style={{ borderBottom: '10px solid black' }} /> */}
    </React.Fragment>
  );
};

export default NavigationBar;
