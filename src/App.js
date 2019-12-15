import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Banner from "./components/banner"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/pic.jpeg" />
        <h1>Paul Rose</h1>
        <h3>Software Engineer | React, Redux, Node.js, Rails</h3>
      </header>
        <div>
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
        </div>
    </div>
  );
}

export default App;
