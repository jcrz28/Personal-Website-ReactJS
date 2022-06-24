import VoiceRecognition from '../../assets/vid/VoiceRecognition.mp4';
import DataRetriever from '../../assets/vid/DataRetriever.mp4';
import SMS from '../../assets/vid/SMS.mp4';
import CFGHackathon from '../../assets/vid/CFGHackathon.mp4';
import YugiohApp from '../../assets/vid/YugiohApp.mp4';
import WeatherApp from '../../assets/vid/WeatherApp.mp4';

const ProjectObject = [
    {
        id: 1,
        title: "Voice Recognition Device",
        public: true,
        video: VoiceRecognition,
        description: ['Programmed a circuit board using C++ to map predefined voice commands and executing the appropriate action.', 
            'Designed the electrical layout using NI Multisim and hardwired electrical components on the circuit board.'],
        technology: ['C++', 'Arduino'],
        year: '2018'
        
    },
    {
        id: 2,
        title: "Forbes Billionaire Data Retriever",
        public: true,
        video: DataRetriever,
        description: ['Pulled Forbes Billionaires of 2021 dataset from Kaggle and store each entry’s information as nodes to linked list.',
            'Created a user-prompt program to manipulate nodes by implementing insertion, deletion, search, sort, and print of a linked list.'],
        technology: ['C++'],
        year: '2021'
    },
    {
        id: 3,
        title: "Student Management System",
        public: false,
        video: SMS,
        description: ['Created a high school database to help students track and forecast their academic career by using WinForms ' + 
                'application with C# and connecting MySQL to Visual Studio 2019.',
                'Designed and programmed call to action buttons to store, retrieve, and manipulate data from a database server using SQL commands.'],
        technology: ['C#', 'MySQL'],
        year: '2021'
    },
    {
        id: 4,
        title: "JPMC Code For Good Hackathon",
        public: false,
        video: CFGHackathon,
        description: ['Developed an interactive web application utilizing Tableau API and ReactJS to display statistical analysis for ' +
                'Humane Society of North Texas.',
                'Transformed excel spreadsheet into categories with Tableau Software to sort, organize, and display data as ' +
                'embedded maps and graphs for data visualization.'],
        technology: ['React', 'Tableau'],
        year: '2021'
    },
    {
        id: 5,
        title: "Yugioh Deck App",
        public: true,
        video: YugiohApp,
        description: ['Integrated a full-stack application using MVC design patterns where guests could list and view their objective cards ' + 
                'by extracting information from Yu-Gi-Oh API.',
               'Features encrypted passwords stored in local database by generating hash passwords using Werkzeug library.' ],
        technology: ['Python Flask', 'SQLAlchemy', 'Bootstrap'],
        year: '2022'
    },
    {
        id: 6,
        title: "Weather App",
        public: true,
        video: WeatherApp,
        description: ['Developed a full-stack application to retrieve real-time weather information by utilizing Open Weather Map API.',
            'Generates different background images depending on the current timezone and weather description.'],
        technology: ['JavaScript'],
        year: '2022'
    },
];

export default ProjectObject.reverse()