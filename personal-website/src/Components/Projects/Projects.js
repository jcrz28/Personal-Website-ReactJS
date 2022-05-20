import React from 'react';
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Weather from './Weather';
import Yugioh from './Yugioh';
import SMS from './SMS';
import DataRetriever from './DataRetriever';
import VoiceRecognition from './VoiceRecognition';

const Projects = () => {
    return (
        <section id = "project-section">
            <h1 className = "title"> Projects </h1>
            <main>
                <Weather/>
                <Yugioh/>
                <SMS />
                <DataRetriever/>
                <VoiceRecognition/>
            </main>
        </section>
    );
}

export default Projects