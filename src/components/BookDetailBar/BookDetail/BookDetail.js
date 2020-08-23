import React from 'react';
import BookCover from './BookCover/BookCover';
import Details from './Details/Details';
import classes from './BookDetail.module.css';

const BookDetail = () => {
    return (
        <div className={classes.BookDetail}>
            <BookCover />
            <Details />
        </div>
    );
};

export default BookDetail;
