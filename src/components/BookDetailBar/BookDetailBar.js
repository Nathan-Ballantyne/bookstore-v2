import React, { useEffect, useState, memo } from 'react';
import BookDetail from './BookDetail/BookDetail';
import classes from './BookDetailBar.module.css';
import axios from 'axios';

const BookDetailBar = (props) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (books.length === 0) {
            axios
                .get(
                    'https://www.googleapis.com/books/v1/users/101691569536719382664/bookshelves/2/volumes'
                )
                .then((response) => setBooks(response.data.items))
                .catch(console.log);
        }
    });

    return (
        <div className={classes.BookDetailBar}>
            {books.map((book) => {
                return (
                    <BookDetail
                        key={book.id}
                        id={book.id}
                        // rating={book.rating}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors.join(', ')}
                        // getBookDetails={props.getBookDetails}
                        img={book.volumeInfo.imageLinks.smallThumbnail}
                    />
                );
            })}
        </div>
    );
};

export default memo(BookDetailBar);
