import React from 'react';
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import VoiceRecognition from './VoiceRecognition';
import VoiceRecognitionDemo from '../Assets/vid/VoiceRecognitionDemo.mp4'

import DataRetriever from './DataRetriever';
import DataRetrieverDemo from '../Assets/vid/DataRetrieverDemo.mp4'

import StudentManagementSystem from './StudentManagementSystem';
import SMSDemo from '../Assets/vid/SMSDemo.mp4'

import Yugioh from './Yugioh';
import YugiohDemo from '../Assets/vid/YugiohDemo.mp4'

import Weather from './Weather';
import WeatherDemo from '../Assets/vid/WeatherDemo.mp4'

import ProjectCard from './ProjectCard';

const Projects = () => {
    const ProjectDescription = [
        {
            id: 1,
            title: "Voice Recognition Device",
            vid: VoiceRecognitionDemo,
            desc: ['Programmed a circuit board using C++ to map predefined voice commands and executing the appropriate action.', 
                'Designed the electrical layout using NI Multisim and hardwired electrical components on the circuit board.']
        },
        {
            id: 2,
            title: "Forbes Billionaire Data Retriever",
            vid: DataRetrieverDemo,
            desc: ['Pulled Forbes Billionaires of 2021 dataset from Kaggle and store each entry’s information as nodes to linked list.',
                'Created a user-prompt program to manipulate nodes by implementing insertion, deletion, search, sort, and print of a linked list.']
        },
        {
            id: 3,
            title: "Student Management System",
            vid: SMSDemo,
            desc: ['Created a high school database to help students track and forecast their academic career by using WinForms ' + 
                    'application with C# and connecting MySQL to Visual Studio 2019.',
                    'Designed and programmed call to action buttons to store, retrieve, and manipulate data from a database server using SQL commands.']
        },
        {
            id: 4,
            title: "Yugioh Deck App",
            vid: YugiohDemo,
            desc: ['Integrated a full-stack application using MVC design patterns where guests could list and view their objective cards ' + 
                    'by extracting information from Yu-Gi-Oh API.',
                   'Features encrypted passwords stored in local database by generating hash passwords using Werkzeug library.' ]
        },
        {
            id: 5,
            title: "Weather App",
            vid: WeatherDemo,
            desc: ['Developed a full-stack application to retrieve real-time weather information by utilizing Open Weather Map API.',
                'Generates different background images depending on the current timezone and weather description.']
        },
    ];
   
    return (
        <section id = "project-section">
            <div className='container'>
                <h1> Projects </h1>
                {/* <main>
                    
                    <Weather items = {ProjectDescription[4]}/>
                    <Yugioh items = {ProjectDescription[3]}/>
                    <StudentManagementSystem items = {ProjectDescription[2]}/>
                    <DataRetriever items = {ProjectDescription[1]}/>
                    <VoiceRecognition items = {ProjectDescription[0]}/>
                </main> */}
                <ProjectCard items = {ProjectDescription} />

            </div>
           
        </section>
    );
}

export default Projects