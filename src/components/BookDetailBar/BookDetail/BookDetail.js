import React from 'react';
import BookCover from './BookCover/BookCover';
import Details from './Details/Details';
import classes from './BookDetail.module.css';

const BookDetail = (props) => {
    return (
        <div className={classes.BookDetail}>
            <BookCover img={props.img} />
            <Details
                id={props.id}
                rating={props.rating}
                title={props.title}
                author={props.author}
                getBookDetails={props.getBookDetails}
            />
        </div>
    );
};

export default BookDetail;
