import React from 'react';
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import VoiceRecognition from './VoiceRecognition';
import VoiceRecognitionDemo from '../assets/vid/VoiceRecognitionDemo.mp4'

import DataRetriever from './DataRetriever';
import DataRetrieverDemo from '../assets/vid/DataRetrieverDemo.mp4'

import SMS from './SMS';
import SMSDemo from '../assets/vid/SMSDemo.mp4'

import Yugioh from './Yugioh';
import YugiohDemo from '../assets/vid/YugiohDemo.mp4'

import Weather from './Weather';
import WeatherDemo from '../assets/vid/WeatherDemo.mp4'


const Projects = () => {
    const vidInfo = [
        {
            title: "Voice Recognition Device",
            vid: VoiceRecognitionDemo
        },
        {
            title: "Forbes Billionaire Data Retriever",
            vid: DataRetrieverDemo
        },
        {
            title: "Student Management System",
            vid: SMSDemo
        },
        {
            title: "Yugioh Deck App",
            vid: YugiohDemo
        },
        {
            title: "Weather App",
            vid: WeatherDemo
        },

    ];

    return (
        <section id = "project-section">
            <h1 className = "title"> Projects </h1>
            <main>
                <Weather items = {vidInfo[4]}/>
                <Yugioh items = {vidInfo[3]}/>
                <SMS items = {vidInfo[2]}/>
                <DataRetriever items = {vidInfo[1]}/>
                <VoiceRecognition items = {vidInfo[0]}/>
            </main>
        </section>
    );
}

export default Projects