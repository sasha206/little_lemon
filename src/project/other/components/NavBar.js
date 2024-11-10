import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../components/Logo.svg";
import { MenuOutlined } from '@ant-design/icons';

const DivNav = styled.div`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  margin: 0 120px;

  /* Мобильная версия */
  @media (max-width: 768px) {
    margin: 0;
    padding: 15px 20px;
  }
`;

const Logo = styled.img`
  height: auto;
  width: auto;

  /* Мобильная версия */
  @media (max-width: 768px) {
    width: 100px;
  }
`;

const UlStyled = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  /* Мобильная версия */
  @media (max-width: 768px) {
    display: ${({ isMenuOpen }) => (isMenuOpen ? "flex" : "none")}; /* Показать или скрыть */
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    border-radius: 8px;
    z-index: 100;
  }
`;

const NavItem = styled.li`
  margin-left: 20px;

  /* Мобильная версия */
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const LinkStyled = styled(NavLink)`
  color: black;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 11px;
  font-family: 'Karla', sans-serif;

  &:hover {
    background-color: #bbbbbb;
  }
  &:active {
    background-color: #bbbbbb;
    color: white;
  }
  &.active {
    background-color: rgb(73, 94, 87);
    color: white;
  }
`;

const MobileMenuIcon = styled(MenuOutlined)`
  display: none;
  font-size: 24px;
  cursor: pointer;

  /* Мобильная версия */
  @media (max-width: 768px) {
    display: block;
    color: black;
  }
`;

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <DivNav>
      <Navbar>
        <Logo src={logo} />
        <MobileMenuIcon onClick={toggleMenu} />
        <UlStyled isMenuOpen={isMenuOpen}>
          <NavItem>
            <LinkStyled to="/" onClick={() => setIsMenuOpen(false)}>Home</LinkStyled>
          </NavItem>
          <NavItem>
            <LinkStyled to="/about" onClick={() => setIsMenuOpen(false)}>About</LinkStyled>
          </NavItem>
          <NavItem>
            <LinkStyled to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</LinkStyled>
          </NavItem>
          <NavItem>
            <LinkStyled to="/reservations" onClick={() => setIsMenuOpen(false)}>Reservations</LinkStyled>
          </NavItem>
          <NavItem>
            <LinkStyled to="/order" onClick={() => setIsMenuOpen(false)}>Order Online</LinkStyled>
          </NavItem>
          <NavItem>
            <LinkStyled to="/login" onClick={() => setIsMenuOpen(false)}>Login</LinkStyled>
          </NavItem>
          <NavItem>
            <LinkStyled to="/new_work" onClick={() => setIsMenuOpen(false)}>New work</LinkStyled>
          </NavItem>
          <NavItem>
            <LinkStyled to="/admin" onClick={() => setIsMenuOpen(false)}>Admin</LinkStyled>
          </NavItem>

        </UlStyled>
      </Navbar>
    </DivNav>
  );
};

export default NavBar;
