import {useState} from 'react';
import classes from './Projects.module.css';

import VoiceRecognitionDemo from '../../assets/vid/VoiceRecognitionDemo.mp4'
import DataRetrieverDemo from '../../assets/vid/DataRetrieverDemo.mp4'
import SMSDemo from '../../assets/vid/SMSDemo.mp4'
import YugiohDemo from '../../assets/vid/YugiohDemo.mp4'
import WeatherDemo from '../../assets/vid/WeatherDemo.mp4'
import ProjectLists from './ProjectLists';
import ProjectFilter from './ProjectFilter';

const Projects = () => {
    const ProjectContents = [
        {
            id: 1,
            title: "Voice Recognition Device",
            vid: VoiceRecognitionDemo,
            desc: ['Programmed a circuit board using C++ to map predefined voice commands and executing the appropriate action.', 
                'Designed the electrical layout using NI Multisim and hardwired electrical components on the circuit board.'],
            year: '2018'
        },
        {
            id: 2,
            title: "Forbes Billionaire Data Retriever",
            vid: DataRetrieverDemo,
            desc: ['Pulled Forbes Billionaires of 2021 dataset from Kaggle and store each entry’s information as nodes to linked list.',
                'Created a user-prompt program to manipulate nodes by implementing insertion, deletion, search, sort, and print of a linked list.'],
            year: '2021'
        },
        {
            id: 3,
            title: "Student Management System",
            vid: SMSDemo,
            desc: ['Created a high school database to help students track and forecast their academic career by using WinForms ' + 
                    'application with C# and connecting MySQL to Visual Studio 2019.',
                    'Designed and programmed call to action buttons to store, retrieve, and manipulate data from a database server using SQL commands.'],
            year: '2021'
        },
        {
            id: 4,
            title: "Yugioh Deck App",
            vid: YugiohDemo,
            desc: ['Integrated a full-stack application using MVC design patterns where guests could list and view their objective cards ' + 
                    'by extracting information from Yu-Gi-Oh API.',
                   'Features encrypted passwords stored in local database by generating hash passwords using Werkzeug library.' ],
            year: '2022'
        },
        {
            id: 5,
            title: "Weather App",
            vid: WeatherDemo,
            desc: ['Developed a full-stack application to retrieve real-time weather information by utilizing Open Weather Map API.',
                'Generates different background images depending on the current timezone and weather description.'],
            year: '2022'
        },
    ];
    const [filteredYear, setFilterYear] = useState ('all');

    const filterChangeHandler = selectedYear =>{
        setFilterYear (selectedYear);
    };

    const filteredProjects = ProjectContents.filter(expense => {
        return expense.year === filteredYear;
    });

    const allProjects = ProjectContents.reverse().map((projects) => (
        <ProjectLists
        key = {projects.id}
        title = {projects.title}
        vid = {projects.vid}
        desc = {projects.desc}
        />
    ));

    const yearProjects = filteredProjects.reverse().map((projects) => (
        <ProjectLists
            key = {projects.id}
            title = {projects.title}
            vid = {projects.vid}
            desc = {projects.desc}
            />
    ));

    return (
        <section className={classes.project}>
            <h1> Projects </h1>

            <ProjectFilter 
            selected = {filteredYear}
            onchangeFilter = {filterChangeHandler}
            />

            <main className={classes.grid}>
                { filteredYear === 'all' && allProjects}
                { filteredYear !== 'all' && yearProjects}
            </main>
            
        </section>
    );
}

export default Projects