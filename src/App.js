import React from 'react';
import './App.css';
import Header from './header.jsx';
import About from './about';
import Projects from './projects';
import Skills from './skills';
import Credits from './credits';
import Carousel from './carousel';
import {Route, Switch, Redirect} from 'react-router-dom';

function App() {

  return (

    <div className="App">
      {/* <Carousel /> */}
      <Header />
      <div className="content">
        <About />
        <Projects />
        <Skills />
      </div>
      {/* <Credits /> */}
      <p id="copyright">© 2019 Paul Rose </p>
    </div>
  );
}

export default App;
