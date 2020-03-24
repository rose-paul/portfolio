import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () =>  (
      <header className="navbar">
        <Link to="/">
          Home
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/projects">
          Projects
        </Link>
        {/* <Link to="/skills">
          Skills
        </Link> */}
      </header>
  );

export default NavBar;