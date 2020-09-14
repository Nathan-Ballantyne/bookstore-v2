import React from 'react';
import classes from './Details.module.css';

const Details = (props) => {
    const bookDetails = {
        title: props.title,
        subtitle: props.subtitle,
        description: props.description,
        author: props.author,
        pagecount: props.pagecount,
        publishedDate: props.publishedDate,
    };

    return (
        <div className={classes.Details}>
            <p className={classes.Rating}>{props.rating}</p>
            <p className={classes.Title}>{props.title}</p>
            <p className={classes.Author}>{props.author}</p>
            <button
                className={classes.DetailButton}
                onClick={() => props.getBookDetails(bookDetails)}>
                Details
            </button>
        </div>
    );
};

export default Details;
