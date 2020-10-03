import React, { useState } from 'react';
import Modal from './Modal';
import AddRemoveButton from '../Button/AddRemoveButton.styled';
import styled from 'styled-components';

const Select = styled.select`
    width: 100%;
    height: 35px;
    background: white;
    color: gray;
    padding-left: 5px;
    font-size: 14px;
    border-radius: 5px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;

    &:focus {
        outline: none;
    }

    option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`;

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
                <Select value={shelfId} onChange={handleChange}>
                    {options.map((option) => {
                        return (
                            <option key={option?.id} value={option?.id}>
                                {option?.title}
                            </option>
                        );
                    })}
                </Select>
                <AddRemoveButton
                    color='green'
                    onClick={() => {
                        addBook(bookId, shelfId);
                        setShow(false);
                    }}>
                    Add
                </AddRemoveButton>
            </div>
        </Modal>
    );
};

export default SelectShelfModal;
