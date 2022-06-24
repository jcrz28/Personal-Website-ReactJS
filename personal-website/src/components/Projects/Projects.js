import {useState} from 'react';
import Container from '../../UI/Container';
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

    const allProjects = ProjectObject.map((project) => (
        <ProjectLists
        key = {project.id}
        title = {project.title}
        public ={project.public}
        video = {project.video}
        description = {project.description}
        technology = {project.technology}
        />
    ));

    const yearProjects = filteredProjects.map((project) => (
        <ProjectLists
        key = {project.id}
        title = {project.title}
        public ={project.public}
        video = {project.video}
        description = {project.description}
        technology = {project.technology}
        />
    ));

    return (
       <Container>
            <h1> Projects </h1>
            
            <ProjectFilter 
            selected = {filteredYear}
            onchangeFilter = {filterChangeHandler}
            />

            <main className={classes.grid}>
                { filteredYear === 'all' && allProjects}
                { filteredYear !== 'all' && yearProjects}
            </main>
        </Container>
    );
}
export default Projects