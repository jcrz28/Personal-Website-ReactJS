import classes from './Card.module.css';
import ResumePDF from '../../assets/CruzResume.pdf'
import headerBackground from '../../assets/img/card-background.jpg';
import profile from '../../assets/img/card-profile.jpg';

const Card = () => {
    return (
        <section className={classes.card}>
            <div className={classes.ID}>
                <div className = {classes.header}>
                    <img alt = "headerBackground" src = {headerBackground}/>
                </div>

                <div className = {classes.profile}>
                    <img alt = "profile" src = {profile}/>
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
        </section>
    );
}
export default Card