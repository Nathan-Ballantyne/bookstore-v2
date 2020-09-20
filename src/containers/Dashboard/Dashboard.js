import React, { useState } from 'react';
import Toolbar from '../../components/Toolbar/Toolbar';
import Search from '../../components/Search/Search';
import MainContent from '../MainContent/MainContent';
import Modal from '../../components/UI/Modal/Modal';

const Dashboard = () => {
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

    return (
        <>
            <Modal show={showModal} modalClosed={modalClosed}>
                {modalContent}
            </Modal>
            <Toolbar open={open} setOpen={setOpen} />
            <Search modalDetails={showModalDetails} open={open} setOpen={setOpen} />
            <MainContent modalDetails={showModalDetails} open={open} setOpen={setOpen} />
        </>
    );
};

export default Dashboard;
