import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion} from 'react-bootstrap';
import ProjectHeader from './ProjectHeader/ProjectHeader';

const VoiceRecognition = (props) => {
    return (
       <div>
           <ProjectHeader 
            title = {props.items.title}
            vid = {props.items.vid}
           />
            <Accordion defaultkey="1">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>More Info</Accordion.Header>
                    <Accordion.Body>
                        <div className="card card-body">
                            <ul>
                                <li>
                                    Programmed a circuit board using C++ to map predefined voice commands and executing the appropriate action.<br/>
                                </li>
                                <li>
                                    Designed the electrical layout using NI Multisim and hardwired electrical components on the circuit board.
                                </li>
                            </ul>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
       </div>
        
    );
}

export default VoiceRecognition