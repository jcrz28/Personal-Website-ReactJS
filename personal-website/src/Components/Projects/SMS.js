import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion} from 'react-bootstrap';
import SMSDemo from '../assets/vid/SMSDemo.mp4'

const StudentManagementSystem = () => {
    return (
        <div className="project-card">
            <div className="info">
                <header>Student Management System</header>
            </div>
            <video controls>
                <source src = {SMSDemo}/>
            </video>
            <div>
                <Accordion defaultActiveKey="3">
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>More Info</Accordion.Header>
                        <Accordion.Body>
                            <div className="card card-body">
                                <ul>
                                    <li>
                                        Created a high school database to help students track and forecast their academic career by using WinForms 
                                        application with C# and connecting MySQL to Visual Studio 2019.<br/>
                                    </li>
                                    <li>
                                        Designed and programmed call to action buttons to store, retrieve, and manipulate data from a database server 
                                        using SQL commands.
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
export default StudentManagementSystem