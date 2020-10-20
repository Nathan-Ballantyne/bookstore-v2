import React, { useState } from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import Search from '../../components/Search/Search';
import MainContent from '../MainContent/MainContent';
import Modal from '../../components/UI/Modal/Modal';
import SelectShelfModal from '../../components/UI/Modal/SelectShelfModal';
import BookPage from '../Pages/BookInformation/BookInformation';
import { Route } from 'react-router-dom';
import axios from 'axios';

const Dashboard = (props) => {
    const [open, setOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showShelfModal, setShowShelfModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [bookShelves, setBookShelves] = useState([]);

    const showModalDetails = (items) => {
        setShowModal(true);
        setModalContent(
            <>
                <p>{items.title}</p>
                <p>{items.subtitle ?? ''}</p>
                <p>{items.description ?? ''}</p>
                <p>
                    <strong>Author: </strong>
                    {items.author ?? items?.authors?.join(', ') ?? ''}
                </p>
                <p>
                    <strong>Pages: </strong>
                    {items.pagecount ?? items.pageCount ?? ''}
                </p>
                <p>
                    <strong>Published: </strong>
                    {items.publishedDate ?? ''}
                </p>
            </>
        );
    };

    const addBookToShelf = async (bookId, shelfId = 0) => {
        axios
            .post(
                `https://www.googleapis.com/books/v1/mylibrary/bookshelves/${shelfId}/addVolume?volumeId=${bookId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${props.token}`,
                    },
                }
            )
            .then(console.log)
            .catch(console.log);
    };

    const removeBookFromShelf = async (bookId, shelfId) => {
        axios
            .post(
                `https://www.googleapis.com/books/v1/mylibrary/bookshelves/${shelfId}/removeVolume?volumeId=${bookId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${props.token}`,
                    },
                }
            )
            .then(console.log)
            .catch(console.log);
    };

    return (
        <>
            <SelectShelfModal
                show={showShelfModal}
                setShow={setShowShelfModal}
                options={bookShelves}
                addBook={addBookToShelf}
            />

            <Modal show={showModal} modalClosed={() => setShowModal(false)}>
                {modalContent}
            </Modal>
            <Toolbar open={open} setOpen={setOpen} />
            <Search
                modalDetails={showModalDetails}
                open={open}
                setOpen={setOpen}
                addBook={addBookToShelf}
            />
            <Route path='/book/:id'>
                <BookPage
                    shelves={bookShelves}
                    setShowShelfModal={setShowShelfModal}
                />
            </Route>
            <Route exact path='/'>
                <MainContent
                    modalDetails={showModalDetails}
                    open={open}
                    setOpen={setOpen}
                    bookShelves={bookShelves}
                    setBookShelves={setBookShelves}
                    removeBook={removeBookFromShelf}
                    token={props.token}
                />
            </Route>
        </>
    );
};

export default Dashboard;
