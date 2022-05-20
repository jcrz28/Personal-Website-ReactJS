import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion} from 'react-bootstrap';
import YugiohDemo from '../assets/vid/YugiohDemo.mp4'

const Yugioh = () => {
    return (
        <div className="project-card">
            <div className="info">
                <header>YuGiOh Deck App</header>
            </div>
            <video controls>
                <source src = {YugiohDemo}/>
            </video>
            <div>
                <Accordion defaultActiveKey="4">
                    <Accordion.Item eventKey="4">
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
       </div>         
        
    );
}
export default Yugioh