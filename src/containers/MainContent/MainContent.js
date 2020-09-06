import React, { useEffect, useState } from 'react';
import classes from './MainContent.module.css';
import BookshelfBar from '../../components/BookshelfBar/BookshelfBar';
import BookDetailBar from '../../components/BookDetailBar/BookDetailBar';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from 'axios';

const MainContent = () => {
    const [bookShelves, setBookShelves] = useState([]);
    const [shelfId, setShelfId] = useState(0);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (bookShelves.length === 0) {
            axios
                .get(
                    'https://www.googleapis.com/books/v1/users/101691569536719382664/bookshelves'
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
    
    if(loaded) {
        bookshelfBar = <BookshelfBar changeShelf={getShelf} bookshelves={bookShelves} />;
    }

    return (
        <div className={classes.MainContent}>
            {bookshelfBar}
            <BookDetailBar shelfId={shelfId} />
        </div>
    );
};

export default MainContent;
