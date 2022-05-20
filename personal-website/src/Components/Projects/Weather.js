import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion} from 'react-bootstrap';
import WeatherDemo from '../assets/vid/WeatherDemo.mp4'

const Weather = () => {
    return (
        <div className="project-card">
            <div className="info">
                <header>Weather App</header>
            </div>
            <video controls>
                <source src = {WeatherDemo}/>
            </video>
            <div>
                <Accordion defaultActiveKey="5">
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>More Info</Accordion.Header>
                        <Accordion.Body>
                            <div className="card card-body">
                                <ul>
                                    <li>
                                        Developed a full-stack application to retrieve real-time weather information 
                                        by utilizing Open Weather Map API.<br/>
                                    </li>
                                    <li>
                                        Generates different background images depending on the current timezone 
                                        and weather description.
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

export default Weather