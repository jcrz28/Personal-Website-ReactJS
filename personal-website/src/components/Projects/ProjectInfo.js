import {Accordion} from 'react-bootstrap';
import classes from './ProjectInfo.module.css';

const ProjectInfo = props => {
    return (
        <Accordion defaultkey={'key'} className={classes.accordion}>
            <Accordion.Item eventKey={'key'}>
                <Accordion.Header>
                    <label className={classes.info}>More Info</label>
                    <div className={classes.technology}>
                        {props.technology.map(technology => (
                            <label 
                                key = {technology}>
                                {technology} 
                                <span></span>
                            </label>
                        ))}
                    </div>

                </Accordion.Header>
                <Accordion.Body>
                    <ul>
                        {props.description.map(description => (
                            <li key = {description}>{description}</li>
                        ))}
                    </ul>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default ProjectInfo