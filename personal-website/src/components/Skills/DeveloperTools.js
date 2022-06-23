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
                <label>VSCode</label>
                <label>GitHub</label>
            </div>
            
            <div className = {classes.list}>
                <label>Visual Studio</label>
                <label>PyCharm</label>
            </div>
            
            <div className = {classes.list}>
                <label>Tableau</label>
            </div>
        </div>
    );
}

export default DeveloperTools