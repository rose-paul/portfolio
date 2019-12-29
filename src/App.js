import React from 'react';
import './App.css';
import Header from './header.jsx';
import About from './about';
import Projects from './projects';
import Skills from './skills';
import Credits from './credits';
function App() {

  return (
    <div className="App">
      <Header />
      <div className="content">
        <About />
        <Projects />
        <Skills />
      </div>
      <Credits />
    </div>
  );
}

export default App;
