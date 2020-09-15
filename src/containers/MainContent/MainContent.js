import React, { useEffect, useState } from 'react';
import classes from './MainContent.module.css';
import BookshelfBar from '../../components/BookshelfBar/BookshelfBar';
import BookDetailBar from '../../components/BookDetailBar/BookDetailBar';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import axios from 'axios';

const MainContent = () => {
    const [bookShelves, setBookShelves] = useState([]);
    const [shelfId, setShelfId] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

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

    const showDetails = (items) => {
        setShowModal(true);
        setModalContent(
            <>
                <p>{items.title}</p>
                <p>{items.subtitle ?? ''}</p>
                <p>{items.description ?? ''}</p>
                <p>
                    <strong>Author: </strong>
                    {items.author ?? ''}
                </p>
                <p>
                    <strong>Pages: </strong>
                    {items.pagecount ?? ''}
                </p>
                <p>
                    <strong>Published: </strong>
                    {items.publishedDate ?? ''}
                </p>
            </>
        );
    };

    const modalClosed = () => {
        setShowModal(false);
    };

    let bookshelfBar = <Spinner />;

    if (loaded) {
        bookshelfBar = (
            <BookshelfBar changeShelf={getShelf} bookshelves={bookShelves} />
        );
    }

    return (
        <div className={classes.MainContent}>
            <Modal show={showModal} modalClosed={modalClosed}>
                {modalContent}
            </Modal>
            {bookshelfBar}
            <BookDetailBar detailClicked={showDetails} shelfId={shelfId} />
        </div>
    );
};

export default MainContent;
