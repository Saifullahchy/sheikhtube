import React from 'react';
import Logo from '../../assets/images/logo.png';
import {
  Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu
} from './NavbarElement';
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={Logo} height="70px" width="auto" alt="logo" />
        </NavLink>

        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle> Home </NavLink>
          <NavLink to="/products" activeStyle> Products </NavLink>
          <NavLink to="/order" activeStyle> Order </NavLink>
          <NavLink to="/news" activeStyle> News </NavLink>
          <NavLink to="/about-us" activeStyle> About Us </NavLink>
          <NavLink to="/contact-us" activeStyle> Contact </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar