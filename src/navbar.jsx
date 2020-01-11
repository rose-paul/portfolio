import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import cx from "classnames";

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
            <p>Home</p>
            <p>About</p>
            <p>Projects</p>
            <p>Skills</p>
      </header>
    </CSSTransition>
  );
};

export default NavBar;