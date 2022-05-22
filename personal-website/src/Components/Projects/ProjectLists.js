import React from 'react';
import ProjectHeader from './ProjectHeader/ProjectHeader';
import ProjectInfo from './ProjectInfo';

const ProjectLists = props => {
    return (
        <div>
            <ProjectHeader 
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