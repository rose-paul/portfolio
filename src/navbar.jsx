import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import cx from "classnames";
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [showHeader, setHeader] = useState(false);

  useEffect(() => {
    setTimeout(setHeader(true), 2000);
  }, []);

  return (
    <CSSTransition
      in={showHeader}
      timeout={4000}
      classNames="header-transition"
      appear
    >
      <header className={cx("navbar", "header-transition--active")}>
        <Link to="/">
          Home
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/projects">
          Projects
        </Link>
        <Link to="/skills">
          Skills
        </Link>
      </header>
    </CSSTransition>
  );
};

export default NavBar;