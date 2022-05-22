import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion} from 'react-bootstrap';

const ProjectInfo = props => {
    return (
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
    );
}

export default ProjectInfo