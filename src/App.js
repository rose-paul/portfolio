import React from 'react';
import './App.css';
import Header from './header.jsx';
import About from './about';
import Projects from './projects';
import Skills from './skills';
import Credits from './credits';
import Carousel from './carousel';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import NavBar from './navbar';
function App() {

  return (
    <HashRouter>
      <div className="App">
        {/* <Carousel /> */}
        <NavBar />
        {/* <div className="content"> */}
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
        {/* </div> */}
        {/* <Credits /> */}
      <footer id="copyright">© 2020 Paul Rose </footer>
      </div>
    </HashRouter>
  );
}

export default App;
