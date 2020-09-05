import React, { useEffect, useState } from 'react';
import classes from './MainContent.module.css';
import BookshelfBar from '../../components/BookshelfBar/BookshelfBar';
import BookDetailBar from '../../components/BookDetailBar/BookDetailBar';
import axios from 'axios';

const MainContent = () => {
    const [bookShelves, setBookShelves] = useState([]);
    const [shelfId, setShelfId] = useState(0);

    useEffect(() => {
        if (bookShelves.length === 0) {
            axios
                .get(
                    'https://www.googleapis.com/books/v1/users/101691569536719382664/bookshelves'
                )
                .then((response) => setBookShelves(response.data.items))
                .catch('Error: ', console.log);
        }
    });

    const getShelf = (id) => {
        setShelfId(id);
    }

    return (
        <div className={classes.MainContent}>
            <BookshelfBar changeShelf={getShelf} bookshelves={bookShelves} />
            <BookDetailBar shelfId={shelfId} />
        </div>
    );
};

export default MainContent;
