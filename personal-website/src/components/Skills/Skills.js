import Section from '../../UI/Section';
import classes from './Skills.module.css';
import Languages from './Languages';
import FrameworkAndLibraries from './FrameworkAndLibraries';
import DeveloperTools from './DeveloperTools';

const Skills = () => {
    return (
        <Section className ={classes.skill}>
            <h1 className = "title">Skills</h1>
            <div className = {classes.grid}>
                <Languages />
                <FrameworkAndLibraries />
                <DeveloperTools />
            </div>
    </Section>
    );
}

export default Skills