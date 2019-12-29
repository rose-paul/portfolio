import React from 'react';
import './App.css';
import Header from './header.jsx';
import About from './about';
import Projects from './projects';
import Skills from './skills';

// import Banner from "./components/banner"
function App() {

  return (
    <div className="App">
      <Header />
      <div className="content">
        <About />
        <Projects />
        <Skills />
      </div>

      <details>
        <div className="credits">
          <span>
            <a target="_blank" href="/icons/set/javascript">
              JavaScript icon
            </a>{" "}
            icon by{" "}
            <a target="_blank" href="https://icons8.com">
              Icons8
            </a>
          </span>

          <span>
            <a target="_blank" href="/icons/set/react">
              React icon
            </a>{" "}
            icon by{" "}
            <a target="_blank" href="https://icons8.com">
              Icons8
            </a>
          </span>

          <span>
            By Rudloff -{" "}
            <a
              class="external free"
              href="https://commons.wikimedia.org/wiki/File:CSS3_and_HTML5_badges.svg"
            >
              https://commons.wikimedia.org/wiki/File:CSS3_and_HTML5_badges.svg
            </a>
            ,{" "}
            <a
              href="https://creativecommons.org/licenses/by/3.0"
              title="Creative Commons Attribution 3.0"
            >
              CC BY 3.0
            </a>
            ,{" "}
            <a href="https://commons.wikimedia.org/w/index.php?curid=49121103">
              Link
            </a>
          </span>

          <span>
            <a href="https://github.com/reduxjs/redux/tree/master/logo">
              Redux Logo
            </a>
          </span>

          <span>
            <a target="_blank" href="/icons/set/github">
              GitHub icon
            </a>{" "}
            icon by{" "}
            <a target="_blank" href="https://icons8.com">
              Icons8
            </a>
          </span>
          <span>
            <a target="_blank" href="/icons/set/linkedin">
              LinkedIn icon
            </a>{" "}
            icon by{" "}
            <a target="_blank" href="https://icons8.com">
              Icons8
            </a>
          </span>
          <span>
            <div>
              Icons made by{" "}
              <a
                href="https://www.flaticon.com/authors/photo3idea-studio"
                title="photo3idea_studio"
              >
                photo3idea_studio
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </span>

          <a target="_blank" href="https://icons8.com/icons/set/email">Email icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        </div>
      </details>
    </div>
  );
}

export default App;
