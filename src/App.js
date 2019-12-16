import React from 'react';
import './App.css';

// import Banner from "./components/banner"
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src="/pic.jpeg" />
        <div>
          <h1>Paul Rose</h1>
          <h3>Software Engineer </h3>
          <h3>React, Redux, Node.js, Rails </h3>
          <div className="header-links">
            <a href="https://github.com/rose-paul" target="_blank"><img src="icons8-github-96.png" /></a>
            <a href="https://www.linkedin.com/in/paul-rose-72626952/" target="_blank"><img src="icons8-linkedin-100.png" /></a>
          </div>
        </div>
      </header>
      <div className="content">
      <section className="about">
        <header>
          <h2>About Me</h2>
          <article>
            I came into the tech realm as a developer following my previous work 
            teaching English at tech companies in Moscow. My current project is developing a game Moscow Cows 
            using JavaScript and HTML5 canvas. Recently, I was part of a team that developed 
            an app called Ride, which allows motorcycle riders to map out rides and share them. 
            For that project we used MongoDB, Express.js, React, Node.js. Upon completing my current projects, 
            I am going expand my knowledge of React and begin learning C++.
        </article>
        <br/>
        <article>
            Outside of programming, I love to travel and am a big hockey fan. 
            While I've been on several great trips over the past few years, 
            the Kamchatka peninsula stands out the most. Snowmobiling through the most 
            remote parts of Russia in -40 degrees isn't a situation I imagined ever being in.
            The pictures above include some of that trip, among others...
          </article>
        </header>
      </section>
      <section className="projects">
          <h2>Projects</h2>
          <div>
            <a href="https://gramcrackers.herokuapp.com/#/login" target="_blank"><p>Gramcrackers</p></a>
            <a href="https://rose-paul.github.io/MoscowCows/" target="_blank"><p>Moscow Cows</p></a>
            <a href="http://ride-mern.herokuapp.com/#/" target="_blank"><p>Ride</p></a>
          </div>
      </section>
      <section className="skills">
          <h2>Technologies, Languages and Skills</h2>
          <div>
            <p><img id="react" src="https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg"/></p>
            <p><img id="redux" src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo-title-dark.png"/></p>
            
            <p><img src="icons8-javascript-480.png"/></p>
            <p><img id="rails" src="https://rubyonrails.org/images/rails-logo.svg"/></p>
            <p><img id="css" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png"/></p>
            <p><img src="https://miro.medium.com/max/3332/0*ok6yuDnTx4o2PSFx.png"/></p>
            <p><img src="http://www.postgresqltutorial.com/wp-content/uploads/2012/08/What-is-PostgreSQL.png"/></p>
            <p><img src="https://miro.medium.com/max/8334/1*Ta4qktHtO--RMUpnR08mBg.jpeg"/></p>

          </div>
      </section>
      <section className="contact">
        {/* <h2>Contact Me</h2> */}
        <div>

        </div>
      </section>
      </div>

      <details>
        <a target="_blank" href="/icons/set/javascript">JavaScript icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

        <a target="_blank" href="/icons/set/react">React icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

        By Rudloff - <a class="external free" href="https://commons.wikimedia.org/wiki/File:CSS3_and_HTML5_badges.svg">https://commons.wikimedia.org/wiki/File:CSS3_and_HTML5_badges.svg</a>, <a href="https://creativecommons.org/licenses/by/3.0" title="Creative Commons Attribution 3.0">CC BY 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=49121103">Link</a>
       
        <a href="https://github.com/reduxjs/redux/tree/master/logo">Redux Logo</a>

        <a target="_blank" href="/icons/set/github">GitHub icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
        <a target="_blank" href="/icons/set/linkedin">LinkedIn icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
      </details>
    </div>
  );
}

export default App;
