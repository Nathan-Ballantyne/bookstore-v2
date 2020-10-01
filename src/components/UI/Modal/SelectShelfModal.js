import React, { useState } from 'react';
import Modal from './Modal';
import AddRemoveButton from '../Button/AddRemoveButton.styled';

const SelectShelfModal = ({ options, addBook, show, setShow }) => {
    const [shelfId, setshelfId] = useState(0);
    const path = window.location.pathname.split('/');
    const bookId = path[2];

    const handleChange = (e) => {
        setshelfId(e.target.value);
    };

    return (
        <Modal show={show} modalClosed={() => setShow(false)}>
            <div>
                <select value={shelfId} onChange={handleChange}>
                    {options.map((option) => {
                        return (
                            <option key={option?.id} value={option?.id}>
                                {option?.title}
                            </option>
                        );
                    })}
                </select>
                <AddRemoveButton
                    color='green'
                    onClick={() => {
                        addBook(bookId, shelfId);
                        setShow(false);
                    }}>
                    Ok
                </AddRemoveButton>
            </div>
        </Modal>
    );
};

export default SelectShelfModal;
