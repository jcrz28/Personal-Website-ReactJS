import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion} from 'react-bootstrap';
import ProjectHeader from './ProjectHeader/ProjectHeader';

const ProjectInformation = (props) => {
    return (
        <div>
            <ProjectHeader 
            title = {props.title}
            vid = {props.vid}
            />
            <Accordion defaultkey={'key'}>
                <Accordion.Item eventKey={'key'}>
                    <Accordion.Header>More Info</Accordion.Header>
                    <Accordion.Body>
                        <div className="card card-body">
                            <ul>
                                {props.desc.map(description => (
                                    <li key = {description}>{description}</li>
                                ))}
                            </ul>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
        
    );
};

export default ProjectInformation