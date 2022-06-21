import React from 'react';
import ProjectTitle from './ProjectTitle/ProjectTitle';
import ProjectInfo from './ProjectInfo';

const ProjectLists = props => {
    return (
        <div>
            <ProjectTitle 
            title = {props.title}
            vid = {props.vid}
            />
            <ProjectInfo
            desc = {props.desc}
            />
        </div>
    );
};

export default ProjectLists