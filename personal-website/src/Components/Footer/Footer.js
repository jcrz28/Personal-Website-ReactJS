import React from 'react';
import './Footer.css';
import Resume from '../assets/Resume.pdf'

const Footer = () => {
    return (
        <footer>
            <div className = "footer-links">
                <a href= "https://www.linkedin.com/in/john-leonard-cruz/" aria-label="LinkedIn" target ="_blank" rel="noopener noreferrer" className="fa fa-linkedin"></a>
                <a href = "https://github.com/jcrz28" target ="_blank" aria-label="GitHub" rel="noopener noreferrer" className = "fa fa-github"></a>
                <a href = {Resume} aria-label="Resume" target ="_blank" rel="noopener noreferrer" className = "fa fa-file"></a>
            </div>
        </footer>
    );
}

export default Footer