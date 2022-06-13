import React from 'react';
import Header from './ProjectHeader/Header';
import ProjectInfo from './ProjectInfo';

const ProjectLists = props => {
    return (
        <div>
            <Header 
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