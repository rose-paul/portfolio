import React from 'react';

const About = () => {
   return (
     <div className="flex-wrapper">
       <img
         src="about.jpg"
         alt=""
       />
       <section className="about">
         <h2>About Me</h2>
         <p>
           Skills: React, Redux, JavaScript, Ruby on Rails, Mapbox, SQL,
           PostgresSQL, MongoDB
         </p>
         <article>
           I came into the tech realm as a developer following my previous work
           teaching English at tech companies in Moscow. Currently, I'm seeking
           work! I do fullstack web development using several technologies and
           enjoy all aspects.
         </article>
         <article>
           My core interest lies in frontend engineering using React, Redux and all else
           JavaScript. My enthusiasm for this aspect is driven by the
           practicality of mapping the backend to a usable frontend and the
           challenge of optimizing this connection. JavaScript and all its
           libraries are great means to this end, and I am always expanding my
           knowledge about them.
         </article>
         <article>
           Outside of programming, I love to travel. I was fortunate to explore
           a lot of places during my time in Moscow, both in the country and the
           surrounding region. To the left is from the Krasnodar region on top
           of the mountain Indyuk.
         </article>
       </section>
     </div>
   );
}

export default About;