import React from 'react';
import './Footer.css';
import ResumePDF from '../assets/resume.pdf'

const Footer = () => {
    return (
        <footer>
            <div className = "footer-links">
                <a href= "https://www.linkedin.com/in/john-leonard-cruz/" aria-label="LinkedIn" target ="_blank" rel="noopener noreferrer" className="fa fa-linkedin"></a>
                <a href = "https://github.com/jcrz28" target ="_blank" aria-label="GitHub" rel="noopener noreferrer" className = "fa fa-github"></a>
                <a href = {ResumePDF} aria-label="Resume" target ="_blank" rel="noopener noreferrer" className = "fa fa-file"></a>
            </div>
        </footer>
    );
}

export default Footer