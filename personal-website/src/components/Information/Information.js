import Container from '../../UI/Container';
import classes from './Information.module.css';
import InformationImages from './InformationImages';

const Information = () => {
    return (
        <Container className={classes.about}>
            <div className= {classes.grid}>
                <InformationImages/>
                <div className = {classes.info}>
                    <h1>About-Me</h1>
                    <p> Hello! I am John Leonard Cruz, and I aspire to be a software engineer!</p>
                    <p>
                        I recently graduated from the University of Houston with a Cum Laude honor in 
                        Bachelor of Science in Computer Science.
                    </p>
                    <p>
                        I am a growth-oriented individual with a passion for problem-solving, which lead me to study computer science. 
                        Throughout my college experience, I gained technical skills by creating personal projects,  
                        and I became a better team player by getting involved in club organizations and by participating in hackathons.
                    </p>
                </div>
            </div>
        </Container>
    );
}
export default Information