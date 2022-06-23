import React from 'react';
import ProjectTitle from './ProjectTitle';
import ProjectInfo from './ProjectInfo';

const ProjectLists = props => {
    return (
        <div>
            <ProjectTitle 
            title = {props.title}
            public ={props.public}
            vid = {props.vid}
            />
            
            <video controls>
                <source src = {props.vid}/>
            </video>

            <ProjectInfo
            desc = {props.desc}
            />
        </div>
    );
};

export default ProjectLists