import classes from './Skills.module.css';

const DeveloperTools = () => {
    return (
        <div className= {classes.set}>
            <span className ="fa fa-briefcase"></span>
            <header>Developer Tools</header>

            <div className = {classes.list}>
                <label>Linux</label>
                <label>Git</label>
            </div>

            <div className = {classes.list}>
                <label>Visual Studio Code</label>
                <label>GitHub</label>
            </div>
            
            <div className = {classes.list}>
                <label>Visual Studio 2019</label>
                <label>PyCharm</label>
            </div>
            
            <div className = {classes.list}>
                <label>Tableau Software</label>
            </div>
        </div>
    );
}

export default DeveloperTools