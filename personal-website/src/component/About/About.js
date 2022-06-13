import React from 'react';
import classes from './About.module.css';
import aboutImage from '../../assets/img/about-image.png';

const About = () => {
    return (
        <section className={classes.about}>
            <div className= {classes.grid}>
                <div className = {classes.image}>
                    <div>
                        <img alt = "aboutImage" src = {aboutImage}/>
                    </div>
                </div>
                <div className = {classes.info}>
                    <h1>About-Me</h1>
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

        </section>
    );
}
export default About