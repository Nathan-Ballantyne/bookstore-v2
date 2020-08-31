import React from 'react';
import BookDetail from './BookDetail/BookDetail';
import classes from './BookDetailBar.module.css';

const BookDetailBar = (props) => {
    return (
        <div className={classes.BookDetailBar}>
            {props.books.map((book) => {
                return (
                    <BookDetail
                        key={book.id}
                        id={book.id}
                        rating={book.rating}
                        title={book.title}
                        author={book.author}
                        getBookDetails={props.getBookDetails}
                    />
                );
            })}
        </div>
    );
};

export default BookDetailBar;
