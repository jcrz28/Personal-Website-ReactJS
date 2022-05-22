import React from 'react';
import ProjectInformation from './ProjectInformation';

const ProjectCard = props => {
    return (
        <main>
            {
                props.items.map((projects) => (
                    <ProjectInformation
                    key = {projects.id}
                    title = {projects.title}
                    vid = {projects.vid}
                    desc = {projects.desc}
                    />
                ))
            }
        </main>
    );
};

export default ProjectCard