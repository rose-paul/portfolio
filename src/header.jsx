import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import cx from "classnames";

const Header = () => {

    const [showHeader, setHeader] = useState(false);

    useEffect( () => {
        setTimeout(
            setHeader(true), 2000
        )
    }, [])

    const onClick = () => {
        window.location.href = "mailto:prose0021@gmail.com?subject=Hey%20Paul!&body="
    }

  return (  

    <CSSTransition
              in={showHeader}
              timeout={4000}
              classNames="header-transition"
              appear
          >
          <header className={cx("App-header", "header-transition--active")}>
        <img alt="" src="pic.jpeg" />
        <div>
            <h1>Paul Rose</h1>
            <h3>Software Engineer </h3>
            <h3>React, Redux, Node.js, Rails </h3>
            <div className="header-links">
                <a href="https://github.com/rose-paul" target="_blank" rel="noopener noreferrer">
                    <img alt="" src="001-github.png" />
                </a>
                <a
                    href="https://www.linkedin.com/in/paul-rose-72626952/"
                    target="_blank" rel="noopener noreferrer"
                >
                    <img alt="" src="002-linkedin.png" />
                </a>
                <img alt="" src="003-email.png" onClick={onClick}></img>
            </div>
        </div>
        </header>
    </CSSTransition>
    )}


export default Header;