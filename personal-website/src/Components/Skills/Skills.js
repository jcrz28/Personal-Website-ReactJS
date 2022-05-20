import React from 'react';
import './Skills.css';
import Languages from './Languages';
import FrameworkAndLibraries from './FrameworkAndLibraries';
import DeveloperTools from './DeveloperTools';

const Skills = () => {
    return (
        <section id = "skill-section">
            <div className='container'>
                <h1 className = "title">Skills</h1>
                <div className = "skills">
                    <Languages />
                    <FrameworkAndLibraries />
                    <DeveloperTools />
                </div>
            </div>
           
    </section>
    );
}

export default Skills