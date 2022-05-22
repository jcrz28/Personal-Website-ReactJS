import React from 'react';
import './ProjectHeader.css';

const ProjectHeader = props => {
    return (
        <div className="project-card">
            <div className="info">
                <header>{props.title}</header>
            </div>
            <video controls>
                <source src = {props.vid}/>
            </video>
        </div>
    );
}

export default ProjectHeader