import classes from './Skills.module.css';

const FrameworkAndLibraries = () => {
    return (
        <div className = {classes.set}>
            <span className ="fa fa-book"></span>
            <header>Framework and Libraries</header>

            <div className = {classes.list}>
                <label>Python Flask</label>
                <label>React</label>
            </div>

            <div className = {classes.list}>
                <label>Node.js</label>
                <label>Express.js</label>
            </div>
            <div className = {classes.list}>
                <label>Bootstrap</label>
                <label>Numpy</label>
            </div>
        </div>
    );
}

export default FrameworkAndLibraries