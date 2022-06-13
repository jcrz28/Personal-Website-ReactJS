import React from 'react';
import classes from './Header.module.css';

const Header = props => {
    return (
        <React.Fragment>
            <div className={classes.header}>
                <header>{props.title}</header>
            </div>
            <video controls>
                <source src = {props.vid}/>
            </video>
        </React.Fragment>
    );
}

export default Header