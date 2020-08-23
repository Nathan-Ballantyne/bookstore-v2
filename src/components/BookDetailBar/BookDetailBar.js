import React from 'react';
import BookDetail from './BookDetail/BookDetail';
import classes from './BookDetailBar.module.css';

const BookDetailBar = () => {
    return (
        <div className={classes.BookDetailBar}>
            <BookDetail />
            <BookDetail />
            <BookDetail />
        </div>
    );
};

export default BookDetailBar;
