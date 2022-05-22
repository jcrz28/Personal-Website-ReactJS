import React from 'react';
import './Card.css';

import Resume from '../Assets/Resume.pdf'
import cardBackground from '../Assets/img/card-background.jpg';
import cardProfile from '../Assets/img/card-profile.jpg';

const Card = () => {
    return (
        <section id = "card-section">
            <div className ="card-id">
                <div className = "card-background">
                    <img alt = "card-background" src = {cardBackground}/>
                </div>

                <div className = "profile-card">
                    <img alt = "profile-card" src = {cardProfile}/>
                </div>
                
                <div className = "card-content">
                    <h3>John Leonard Cruz</h3>
                    <p>B.S. in Computer Science<br/>University of Houston</p>
                </div>

                <div className = "icon-link">
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
                        href = {Resume} 
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