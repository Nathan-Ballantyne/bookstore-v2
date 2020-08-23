import React from 'react';
import classes from './Details.module.css';

const Details = () => {
    return (
        <div className={classes.Details}>
            <p className={classes.Rating}>4.8</p>
            <p className={classes.Title}>Book Title</p>
            <p className={classes.Author}>Author</p>
            <button className={classes.DetailButton}>Details</button>
        </div>
    )
}

export default Details
