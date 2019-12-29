import React from 'react';
import './App.css';

// import Banner from "./components/banner"
function App() {

  const onClick = () => {
        window.location.href = `mailto:prose0021@gmail.com`;
    }

  return (
    <div className="App">
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
      <div className="content">
        <section className="about">
          <header>
            <h2>About Me</h2>
            <article>
              I came into the tech realm as a developer following my previous
              work teaching English at tech companies in Moscow. I do fullstack
              web development using several technologies and enjoy all aspects.
              My core interest lies in frontend engineering using React, Redux
              and Javascript. My enthusiasm for this aspect is driven by 2
              things: the practicality of mapping the backend to a usable
              frontend and the challenge of optimizing this connection.
              Javascript and React are great means to this end, and I am always
              expanding my knowledge about them. Below you can find my projects
              and a list of the main technologies and languages I employ.
            </article>
            <br />
            <article>
              Outside of programming, I love to travel. From 2015-2019 I lived
              in Moscow, Russia. I was fortunate to explore a lot of places
              during my time there, both in the country and the surrounding
              region. While I've been on several great trips over the past
              several years, the Kamchatka peninsula stands out the most.
              Snowmobiling through the most remote parts of Russia in -40
              degrees isn't a situation I imagined ever being in. The pictures
              above include some of that trip, among others.
            </article>
          </header>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <div>
            <a
              href="https://gramcrackers.herokuapp.com/#/login"
              target="_blank"
            >
              <img src="gramcrackers.png" />
              <p>Gramcrackers</p>
            </a>
            <a href="https://rose-paul.github.io/MoscowCows/" target="_blank">
              <img src="matryoshka.png" />
              <p>Moscow Cows</p>
            </a>
            <a href="http://ride-mern.herokuapp.com/#/" target="_blank">
              <img src="wheel-128.png" />
              <p>Ride</p>
            </a>
          </div>
        </section>
        <section className="skills">
          <h2>Technologies, Languages and Skills</h2>
          <div>
            <p>
              <img
                id="react"
                src="https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg"
              />
            </p>
            <p>
              <img
                id="redux"
                src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo-title-dark.png"
              />
            </p>

            <p>
              <img src="icons8-javascript-480.png" />
            </p>
            <p>
              <img
                id="rails"
                src="https://rubyonrails.org/images/rails-logo.svg"
              />
            </p>
            <p>
              <img
                id="css"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png"
              />
            </p>
            <p>
              <img src="https://miro.medium.com/max/3332/0*ok6yuDnTx4o2PSFx.png" />
            </p>
            <p>
              <img src="http://www.postgresqltutorial.com/wp-content/uploads/2012/08/What-is-PostgreSQL.png" />
            </p>
            <p>
              <img src="https://miro.medium.com/max/8334/1*Ta4qktHtO--RMUpnR08mBg.jpeg" />
            </p>
          </div>
        </section>
        <section className="contact">{/* <h2>Contact Me</h2> */}</section>
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
