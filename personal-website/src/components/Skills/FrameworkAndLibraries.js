import classes from './Skills.module.css';

const FrameworkAndLibraries = () => {
    return (
        <div className = {classes.set}>
            <span className ="fa fa-book"></span>
            <header>Framework and Libraries</header>

            <div className = {classes.list}>
                <label>Flask</label>
                <label>Jinja Template</label>
            </div>

            <div className = {classes.list}>
                <label>NumPy</label>
                <label>Matplotlib</label>
            </div>
            <div className = {classes.list}>
                <label>Bootstrap</label>
            </div>
        </div>
    );
}

export default FrameworkAndLibraries