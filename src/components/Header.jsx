import React from 'react';
import { NavLink } from 'react-router-dom';
// ActiveStyle={{ background: 'tomato'}}
// ActiveClassName="my-class-name"
const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink exact to="/about">About</NavLink></li>
      <li><NavLink exact to="/teachers">Teachers</NavLink></li>
      <li><NavLink exact to="/Courses">Courses</NavLink></li>
    </ul>
  </header>
);

export default Header;
