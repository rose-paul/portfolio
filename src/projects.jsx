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
    }

    return (
      <section className="projects">
        <h2>Projects</h2>
        <div>
          <a href="https://gramcrackers.herokuapp.com/#/login" target="_blank">
            <img
              src="gramcrackers.png"
              onMouseEnter={mouseEnterAnim}
              onMouseLeave={mouseLeaveAnim}
            />
            <p>Gramcrackers</p>
          </a>
          <a href="https://rose-paul.github.io/MoscowCows/" target="_blank">
            <img
              src="matryoshka.png"
              onMouseEnter={mouseEnterAnim}
              onMouseLeave={mouseLeaveAnim}
            />
            <p>Moscow Cows</p>
          </a>
          <a href="http://ride-mern.herokuapp.com/#/" target="_blank">
            <img
              src="wheel-128.png"
              onMouseEnter={mouseEnterAnim}
              onMouseLeave={mouseLeaveAnim}
            />
            <p>Ride</p>
          </a>
        </div>
      </section>
    );
}

export default Projects;