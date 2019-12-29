import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import cx from "classnames";

const Header = () => {

    const [showHeader] = useState(true);

    const onClick = () => {
        window.location.href = `mailto:prose0021@gmail.com`;
    }

  return (  

    <CSSTransition
              in={showHeader}
              timeout={1000}
              classNames="header-transition"
              appear
          >
          <header className={cx("App-header", "header-transition--active")}>
        <img src="pic.jpeg" />
        <div>
            <h1>Paul Rose</h1>
            <h3>Software Engineer </h3>
            <h3>React, Redux, Node.js, Rails </h3>
            <div className="header-links">
                <a href="https://github.com/rose-paul" target="_blank">
                    <img src="icons8-github-96.png" />
                </a>
                <a
                    href="https://www.linkedin.com/in/paul-rose-72626952/"
                    target="_blank"
                >
                    <img src="icons8-linkedin-100.png" />
                </a>
                <img src="icons8-email-52.png" onClick={onClick}></img>
            </div>
        </div>
        </header>
    </CSSTransition>
    )}


export default Header;