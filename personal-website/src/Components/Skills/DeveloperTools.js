import React from 'react';

const DeveloperTools = () => {
    return (
        <div className= "skills-set">
            <span className ="fa fa-briefcase"></span>
            <header>Developer Tools</header>

            <div className = "list">
                <label>Linux</label>
                <label>Git</label>
            </div>

            <div className = "list">
                <label>Visual Studio Code</label>
                <label>GitHub</label>
            </div>
            
            <div className = "list">
                <label>Visual Studio 2019</label>
                <label>PyCharm</label>
            </div>
            
            <div className = "list">
                <label>Tableau Software</label>
            </div>
        </div>
    );
}

export default DeveloperTools