import React from 'react';
import ProjectTitle from './ProjectTitle';
import ProjectInfo from './ProjectInfo';

const ProjectLists = props => {
    return (
        <div>
            <ProjectTitle 
            title = {props.title}
            public ={props.public}
            video = {props.video}
            />
            
            <video controls>
                <source src = {props.video}/>
            </video>

            <ProjectInfo
            description = {props.description}
            technology = {props.technology}
            />
        </div>
    );
};

export default ProjectLists