import React from 'react';
import './About.css';

import aboutImage from '../Assets/img/about-image.png';

const About = () => {
    return (
        <section id = "about-section">
            <div className='container'>
                <div className = "about-image">
                    <div>
                        <img alt = "aboutImage" src = {aboutImage}/>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className = "about-info">
                    <div>
                        <h1 className = "title">About-Me</h1>
                        <p id = "self-introduction">
                            Hello! I am John Leonard Cruz, and I aspire to be a software engineer!
                        </p>

                        <p id = "background-education">
                            I recently graduated from the University of Houston with a Cum Laude honor in Bachelor of Science in Computer Science.
                        </p>
                        <p id = "background-introduction">
                            I am a growth-oriented individual with a passion for problem-solving, which lead me to study computer science. 
                            Throughout my college experience, I gained technical skills by creating personal projects,  
                            and I became a better team player by getting involved in club organizations and by participating in hackathons.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About