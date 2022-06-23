import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BsFillFileLockFill } from "react-icons/bs";
import classes from './ProjectTitle.module.css';

const ProjectTitle = props => {
    return (
        <React.Fragment>
            <div className={classes.title}>
                {
                    props.public && 
                    <header> {props.title} </header>
                }

                {
                    !props.public && 
                    <header> {props.title} 
                        {['bottom'].map((placement) => (
                            <OverlayTrigger
                                key={placement}
                                placement={placement}
                                overlay={
                                    <Tooltip id={`tooltip-${placement}`}>
                                    GitHub Repository is <strong>Private</strong>.
                                    </Tooltip>
                                }
                            >
                            <span> <BsFillFileLockFill/> </span>
                            </OverlayTrigger>
                        ))}
                    </header>
                }

            </div>
        </React.Fragment>
    );
}

export default ProjectTitle