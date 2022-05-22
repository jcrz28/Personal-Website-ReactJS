import React from 'react';
import ProjectHeader from './ProjectHeader/ProjectHeader';
import ProjectInformation from './ProjectInformation';

const Weather = (props) => {
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

export default Weather