import classes from './ProjectFilter.module.css';

const ProjectFilter = (props) => {
    const dropDownChangeHandler = (event) => {
        props.onchangeFilter(event.target.value);
    }

    return (
        <div className={classes.filter}>
            <div className={classes.control}>
                <select value ={props.selected} onChange={dropDownChangeHandler}>
                    <option value='all'>All</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2018'>2018</option>
                </select>
            </div>
        </div>
    );
};

export default ProjectFilter;