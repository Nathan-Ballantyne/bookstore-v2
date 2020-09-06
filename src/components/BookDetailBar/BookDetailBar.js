import React, { useEffect, useState, memo } from 'react';
import BookDetail from './BookDetail/BookDetail';
import Spinner from '../UI/Spinner/Spinner';
import classes from './BookDetailBar.module.css';
import axios from 'axios';

const BookDetailBar = (props) => {
    const [books, setBooks] = useState([]);
    const [shelfId, setShelfId] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        console.log(props.shelfId);

        if (books.length === 0 || shelfId !== props.shelfId) {
            setLoaded(false);
            axios
                .get(
                    `https://www.googleapis.com/books/v1/users/101691569536719382664/bookshelves/${props.shelfId}/volumes`
                )
                .then((response) => {
                    setBooks(response.data.items);
                    setShelfId(props.shelfId);
                    setLoaded(true);
                })
                .catch(console.log);
        }
    }, [props.shelfId, books.length, shelfId]);

    let bookDetail = <Spinner />;

    if (loaded) {
        bookDetail = books.map((book) => {
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
        });
    }

    return <div className={classes.BookDetailBar}>{bookDetail}</div>;
};

export default memo(BookDetailBar);
