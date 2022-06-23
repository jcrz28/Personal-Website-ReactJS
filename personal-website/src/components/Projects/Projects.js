import {useState} from 'react';
import Section from '../../UI/Section';
import classes from './Projects.module.css';
import ProjectLists from './ProjectLists';
import ProjectFilter from './ProjectFilter';
import ProjectObject from './ProjectObject';

const Projects = () => {
    const [filteredYear, setFilterYear] = useState ('all');

    const filterChangeHandler = selectedYear =>{
        setFilterYear (selectedYear);
    };

    const filteredProjects = ProjectObject.filter(expense => {
        return expense.year === filteredYear;
    });

    const allProjects = ProjectObject.map((projects) => (
        <ProjectLists
        key = {projects.id}
        title = {projects.title}
        public ={projects.public}
        vid = {projects.vid}
        desc = {projects.desc}
        />
    ));

    const yearProjects = filteredProjects.map((projects) => (
        <ProjectLists
            key = {projects.id}
            title = {projects.title}
            public ={projects.public}
            vid = {projects.vid}
            desc = {projects.desc}
            />
    ));

    return (
       <Section>
            <h1> Projects </h1>
            
            <ProjectFilter 
            selected = {filteredYear}
            onchangeFilter = {filterChangeHandler}
            />

            <main className={classes.grid}>
                { filteredYear === 'all' && allProjects}
                { filteredYear !== 'all' && yearProjects}
            </main>
        </Section>
    );
}
export default Projects