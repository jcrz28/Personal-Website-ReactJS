import classes from './Skills.module.css';

const Languages = () =>{
    return (
        <div className = {classes.set}>
            <span className ="fa fa-globe"></span>
            <header>Languages</header>

            <div className = {classes.list}>
                <label>Python</label>
                <label>C++</label>
            </div>
            <div className = {classes.list}>
                <label>C#</label>
                <label>SQL</label>
            </div>
        
            <div className = {classes.list}>
                <label>JavaScript</label>
                <label>HTML/CSS</label>
            </div>
        </div>

    );
}
export default Languages