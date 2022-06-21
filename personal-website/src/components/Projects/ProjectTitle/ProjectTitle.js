import React from 'react';
import classes from './ProjectTitle.module.css';

const ProjectTitle = props => {
    return (
        <React.Fragment>
            <div className={classes.title}>
                <header>{props.title}</header>
            </div>
            <video controls>
                <source src = {props.vid}/>
            </video>
        </React.Fragment>
    );
}

export default ProjectTitle