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


const Projects = () => {
    const vidInfo = [
        {
            id: 1,
            title: "Voice Recognition Device",
            vid: VoiceRecognitionDemo
        },
        {
            id: 2,
            title: "Forbes Billionaire Data Retriever",
            vid: DataRetrieverDemo
        },
        {
            id: 3,
            title: "Student Management System",
            vid: SMSDemo
        },
        {
            id: 4,
            title: "Yugioh Deck App",
            vid: YugiohDemo
        },
        {
            id: 5,
            title: "Weather App",
            vid: WeatherDemo
        },

    ];

    return (
        <section id = "project-section">
            <div className='container'>
                <h1 className = "title"> Projects </h1>
                <main>
                    <Weather items = {vidInfo[4]}/>
                    <Yugioh items = {vidInfo[3]}/>
                    <StudentManagementSystem items = {vidInfo[2]}/>
                    <DataRetriever items = {vidInfo[1]}/>
                    <VoiceRecognition items = {vidInfo[0]}/>
                </main>
            </div>
           
        </section>
    );
}

export default Projects