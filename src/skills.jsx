import React, { useState, useEffect } from 'react';

const Skills = () => {

    
    const [display, setDisplay] = useState("hide")

    useEffect( () => {
        setTimeout(
            () => setDisplay("show"), 
            200)
    }, [])

    return (<section className="skills">
        <h2>Technologies, Languages and Skills</h2>
        <div>
            <p>
                <img className={display}
                    alt="" src="icons8-javascript-480.png" />
            </p>
            <p>
                <img className={display}
                    alt="" src="Python-Logo-PNG-Image.png" />
            </p>
            <p>
                <img className={display}
                    alt=""
                    id="react"
                    src="/kisspng-react-logo-redux-webpack-babel--5b7b7258694912.5465440215348168564313.png"
                />
            </p>
            <p>
                <img className={display}
                    alt=""
                    id="redux"
                    src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo-title-light.png"
                />
            </p>

            <p>
                <img className={display}
                    alt=""
                    id="rails"
                    src="https://rubyonrails.org/images/rails-logo.svg"
                />
            </p>
            <p>
                <img className={display}
                    style={{width: 300 + "px"}}
                    alt=""
                    src="nodepng.png"
                />
            </p>
            <p>
                <img className={display}
                    alt=""
                    id="css"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png"
                />
            </p>
            <p>
                <img className={display}
                    alt=""
                    id="css"
                    src="html5.png"
                />
            </p>
            <p>
                <img className={display}
                    style={{padding: 15 + "px"}}
                    alt="" src="mapbox-logo-white.png" />
            </p>
            <p>
                <img className={display}
                    id="postgres" alt="" src="postgresql.png" />
            </p>
            <p>
                <img className={display}
                    alt="" src="mongodb.png" />
            </p>
        </div>
    </section>)
}

export default Skills;