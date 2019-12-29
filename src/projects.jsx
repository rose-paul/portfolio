import React from 'react';

const Projects = () => {
    return (
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
    )
}

export default Projects;