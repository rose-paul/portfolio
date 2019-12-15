import React from 'react';
import logo from './logo.svg';
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
            an app called Rides, which allows motorcycle riders to map out rides and share them. 
            For that project we used MongoDB, Express.js, React, Node.js. Upon completing my current projects, 
            I am going expand my knowledge of React and begin learning C++.
        </article>
        <br/>
        <article>
            Outside of programming, I love to travel and am a big hockey fan. 
            While I've been on several great trips over the past few years, 
            the Kamchatka peninsula stands out the most. Snowmobiling through the most 
            remote parts of Russia in -40 degrees isn't a situation I imagined ever being in.
          </article>
        </header>
      </section>
      <section className="projects">
          <h2>Projects</h2>
          <div>
            <p>Gramcrackers</p>
            <p>Moscow Cows</p>
            <p>Ride</p>
          </div>
      </section>
      </div>
    </div>
  );
}

export default App;
