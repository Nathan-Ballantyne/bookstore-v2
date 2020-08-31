import React from 'react';
import classes from './Details.module.css';

const Details = (props) => {
    return (
        <div className={classes.Details}>
            <p className={classes.Rating}>{props.rating}</p>
            <p className={classes.Title}>{props.title}</p>
            <p className={classes.Author}>{props.author}</p>
            <button className={classes.DetailButton} onClick={props.getBookDetails.bind(props.id)}>Details</button>
        </div>
    );
};

export default Details;
