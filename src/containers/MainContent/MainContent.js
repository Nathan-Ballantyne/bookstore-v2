import React, { useEffect, useState } from 'react';
import classes from './MainContent.module.css';
import BookshelfBar from '../../components/BookshelfBar/BookshelfBar';
import BookDetailBar from '../../components/BookDetailBar/BookDetailBar';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from 'axios';

const MainContent = ({ modalDetails, bookShelves, setBookShelves, removeBook }) => {
    const [shelfId, setShelfId] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (bookShelves.length === 0) {
            axios
                .get(
                    `https://www.googleapis.com/books/v1/users/${process.env.REACT_APP_GOOGLE_USER_ID}/bookshelves`
                )
                .then((response) => {
                    setBookShelves(response.data.items);
                    setLoaded(true);
                })
                .catch(console.log);
        }
    });

    const getShelf = (id) => {
        setShelfId(id);
    };

    let bookshelfBar = <Spinner />;

    if (loaded) {
        bookshelfBar = (
            <BookshelfBar changeShelf={getShelf} bookshelves={bookShelves} />
        );
    }

    return (
        <div className={classes.MainContent}>
            {bookshelfBar}
            <BookDetailBar removeBook={removeBook} detailClicked={modalDetails} shelfId={shelfId} />
        </div>
    );
};

export default MainContent;
