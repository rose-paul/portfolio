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
          <div id="single-project">
            <div>
              <a
                href="https://gramcrackers.herokuapp.com/#/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt=""
                  src="gramcrackers.png"
                  onMouseEnter={mouseEnterAnim}
                  onMouseLeave={mouseLeaveAnim}
                />
                <p>Gramcrackers</p>
              </a>
            </div>
            <div>
              <p>
                Gramcrackers, an Instagram clone, is a social media app that
                allows users to post photos and interact with other users
                through following, comments and likes.
              </p>
            </div>
          </div>
          <div id="single-project">
            <a
              href="https://rose-paul.github.io/MoscowCows/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt=""
                src="matryoshka.png"
                onMouseEnter={shakeDoll}
                onMouseLeave={mouseLeaveAnim}
              />
              <p>Moscow Cows</p>
            </a>
            <div>
              <p>
                In Moscow Cows, a game implemented in JavaScript using the HTML5
                canvas tag, players must successfully collect full sets of
                Russian nesting dolls while avoiding being trampled by a herd of
                cows.
              </p>
            </div>
          </div>
          <div id="single-project">
            <a
              href="http://ride-mern.herokuapp.com/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt=""
                src="wheel-128.png"
                onMouseEnter={rotateWheel}
                onMouseLeave={mouseLeaveAnim}
              />
              <p>Ride</p>
            </a>
            <div>
              <p>
                Ride is a web application targeting the motorcycling enthusiast
                community. It allows a
                user to record a ride on a map and peruse all saved rides. Use the "post" a ride feature to share
                it or stop by Ride and find your next adventure. Leave the community your
                nugget of wisdom in a ride review. Our aim is to enhance the
                enjoyment of two wheeled riding everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Projects;