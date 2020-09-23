import React, { useState } from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import Search from '../../components/Search/Search';
import MainContent from '../MainContent/MainContent';
import Modal from '../../components/UI/Modal/Modal';
import axios from 'axios';

const Dashboard = (props) => {
    const [open, setOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);

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

    const addBookToShelf = async (bookId) => {
        axios
            .post(
                `https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/addVolume?volumeId=${bookId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
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

    const modalClosed = () => {
        setShowModal(false);
    };

    return (
        <>
            <Modal show={showModal} modalClosed={modalClosed}>
                {modalContent}
            </Modal>
            <Toolbar
                isLoggedIn={props.setLogin}
                open={open}
                setOpen={setOpen}
            />
            <Search
                modalDetails={showModalDetails}
                open={open}
                setOpen={setOpen}
                addBook={addBookToShelf}
            />
            <MainContent
                modalDetails={showModalDetails}
                open={open}
                setOpen={setOpen}
            />
        </>
    );
};

export default Dashboard;
