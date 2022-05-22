import React from 'react';
import ProjectHeader from './ProjectHeader/ProjectHeader';
import ProjectInformation from './ProjectInformation';

const Yugioh = (props) => {
    return (
        <div>
            <ProjectHeader 
            title = {props.items.title}
            vid = {props.items.vid}
            />
            <ProjectInformation
            id = {props.items.id}
            desc = {props.items.desc}
            />
        </div>
    );
}
export default Yugioh