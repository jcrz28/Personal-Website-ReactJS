import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion} from 'react-bootstrap';
import ProjectHeader from './ProjectHeader/ProjectHeader';

const Yugioh = (props) => {
    return (
        <div>
            <ProjectHeader 
            title = {props.items.title}
            vid = {props.items.vid}
            />
            <Accordion defaultkey={props.items.id}>
                <Accordion.Item eventKey={props.items.id}>
                    <Accordion.Header>More Info</Accordion.Header>
                    <Accordion.Body>
                        <div className="card card-body">
                            <ul>
                                <li>
                                    Integrated a full-stack application using MVC design patterns where guests could list and view their objective 
                                    cards by extracting information from Yu-Gi-Oh API.<br/>
                                </li>
                                <li>
                                    Features encrypted passwords stored in local database by generating hash passwords using Werkzeug library.
                                </li>
                            </ul>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}
export default Yugioh