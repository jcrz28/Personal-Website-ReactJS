import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Accordion} from 'react-bootstrap';
import DataRetrieverDemo from '../assets/vid/DataRetrieverDemo.mp4'

const DataRetriever = () => {
    return (
        <div className="project-card">
            <div className="info">
                <header>Forbes Billionare Data Retriever</header>
            </div>
            <video controls>
                <source src = {DataRetrieverDemo}/>
            </video>
            <div>
                <Accordion defaultActiveKey="2">
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>More Info</Accordion.Header>
                        <Accordion.Body>
                            <div className="card card-body">
                                <ul>
                                    <li>
                                        Pulled Forbes Billionaires of 2021 dataset from Kaggle and store each entry’s 
                                        information as nodes to linked list.<br/>
                                    </li>
                                    <li>
                                        Created a user-prompt program to manipulate nodes by implementing 
                                        insertion, deletion, search, sort, and print of a linked list.
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

export default DataRetriever