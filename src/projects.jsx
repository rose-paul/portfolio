import React from 'react';

const Projects = () => {

    const mouseEnterAnim = (e) => {
        let stylee = "rotateY(35deg)";
        e.target.style.transform = stylee;
        e.target.style.webkitTransform = stylee;
        e.target.style.mozTransform = stylee;
        e.target.style.msTransform = stylee;
        e.target.style.oTransform = stylee;
    }

    const mouseLeaveAnim = (e) => {
        e.target.style = "";
        e.target.className = ""
    }

    const rotateWheel = (e) => {
        e.target.className = "rotate"
    }

    const shakeDoll = (e) => {
        e.target.className = "shake"
    }

    return (
      <section className="projects">
        <h2>Projects</h2>
        <div>
          <a href="https://gramcrackers.herokuapp.com/#/login" target="_blank" rel="noopener noreferrer">
            <img
                alt=""
              src="gramcrackers.png"
              onMouseEnter={mouseEnterAnim}
              onMouseLeave={mouseLeaveAnim}
            /> 
            <p>Gramcrackers</p>
          </a>
          <a href="https://rose-paul.github.io/MoscowCows/" target="_blank" rel="noopener noreferrer">
            <img
                alt=""
              src="matryoshka.png"
              onMouseEnter={shakeDoll}
              onMouseLeave={mouseLeaveAnim}
            />
            <p>Moscow Cows</p>
          </a>
          <a href="http://ride-mern.herokuapp.com/#/" target="_blank" rel="noopener noreferrer">
            <img
                alt=""
              src="wheel-128.png"
              onMouseEnter={rotateWheel}
              onMouseLeave={mouseLeaveAnim}
            />
            <p>Ride</p>
          </a>
        </div>
      </section>
    );
}

export default Projects;