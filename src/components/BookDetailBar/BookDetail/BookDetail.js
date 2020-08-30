import React from 'react';
import BookCover from './BookCover/BookCover';
import Details from './Details/Details';
import classes from './BookDetail.module.css';

const BookDetail = (props) => {
    return (
        <div className={classes.BookDetail}>
            <BookCover />
            <Details
                id={props.id}
                rating={props.rating}
                title={props.title}
                author={props.author}
            />
        </div>
    );
};

export default BookDetail;
