import React, { useState, useEffect }from 'react';
import { CSSTransition } from 'react-transition-group';
import cx from "classnames";
import { clean } from 'gh-pages';

const About = () => {

  const [phaseIn, setPhase] = useState("hidden")
  const [phaseIn2, setPhase2] = useState("hidden2")

  // const cleanup = () => {
  //   setPhase("hidden")
  // }

  useEffect(() => {
      setTimeout(
        setPhase("transform"), 2000,
        setPhase2("about"), 500
      )

      // return () => {
      //   cleanup()
      // }
  }, [])
  
   return (
     <div className="flex-wrapper">
       
         <img id="transform"
         src="about.jpg"
         alt=""
       />
       
         <section className="about">
         <h2>About Me</h2>
         <p>
           Skills: React, Redux, JavaScript, Node.js, Ruby on Rails, Mapbox, SQL,
           PostgresSQL, MongoDB
         </p>
         <article>
           I came into the tech realm as a developer following my previous work
           teaching English at tech companies in Moscow. I do fullstack web development and
           enjoy all aspects, from page design to system design. My most recent endeavors have
           focused on engineering in Javascript and React. I value teamwork and continual growth.
         </article>
         <article>
           Outside of programming, I love to travel. I was fortunate to explore
           a lot of places during my time in Moscow, both in the country and the
           surrounding region. To the left is from the Krasnodar region on top
           of the mountain Indyuk.

           Feel free to reach out if you want to chat more!
         </article>
       </section>
     </div>
   );
}

export default About;