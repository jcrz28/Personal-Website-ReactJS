import Container from '../../UI/Container';
import classes from './Profile.module.css';
import ResumePDF from '../../assets/CruzResume.pdf'
import HeaderPhoto from '../../assets/img/header-photo.jpg';
import ProfilePhoto from '../../assets/img/profile-photo.jpg';

const Profile = () => {
    return (
        <Container className={classes.card}>
            <div className={classes.id}>
                <div className = {classes.header}>
                    <img alt = "headerBackground" src = {HeaderPhoto}/>
                </div>

                <div className = {classes.profile}>
                    <img alt = "profile" src = {ProfilePhoto}/>
                </div>
        
                <div className = {classes.content}>
                    <h3>John Leonard Cruz</h3>
                    <p>B.S. in Computer Science<br/>University of Houston</p>
                </div>

                <div className = {classes.icons}>
                    <a 
                        href= "https://www.linkedin.com/in/john-leonard-cruz/" 
                        aria-label="LinkedIn" 
                        target ="_blank" 
                        rel="noopener noreferrer" 
                        className="fa fa-linkedin">
                    </a>

                    <a 
                        href = "https://github.com/jcrz28" 
                        target ="_blank" 
                        aria-label="GitHub" 
                        rel="noopener noreferrer"
                        className = "fa fa-github">
                    </a>
                    
                    <a 
                        href = {ResumePDF} 
                        aria-label="Resume" 
                        target ="_blank" 
                        rel="noopener noreferrer" 
                        className = "fa fa-file">
                    </a>
                </div>
            </div>
        </Container>
    );
}
export default Profile