import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion} from 'react-bootstrap';
import VoiceRecognitionDemo from '../assets/vid/VoiceRecognitionDemo.mp4'

const VoiceRecognition = () => {
    return (
        <div className="project-card">
            <div className="info">
                <header>Voice Recognition Device</header>
            </div>
            <video controls>
                <source src = {VoiceRecognitionDemo}/>
            </video>
            <div>
                <Accordion defaultActiveKey="1">
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
        </div>        
    );
}

export default VoiceRecognition