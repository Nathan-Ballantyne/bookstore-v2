import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Details.module.css';

const Details = (props) => {
    const bookDetails = {
        id: props.id,
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
            <div className={classes.DetailButton}>

            <Link style={{textDecoration: 'none'}}
                to={`/book/${props.id}`}>
                Details
            </Link>
            </div>
        </div>
    );
};

export default Details;
