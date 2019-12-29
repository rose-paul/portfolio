import React from 'react';

const Header = () => {
    const onClick = () => {
        window.location.href = `mailto:prose0021@gmail.com`;
    }

  return (  
  <header className="App-header">
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
    )}


export default Header;