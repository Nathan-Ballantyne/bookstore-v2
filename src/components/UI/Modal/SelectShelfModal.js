import React from 'react';
import Modal from './Modal';
import AddRemoveButton from '../Button/AddRemoveButton.styled';

const SelectShelfModal = ({ options, addBook, bookId }) => {
    return (
        <Modal show={false} modalClosed={''}>
            <div>
                <select>
                    {options.map((option) => {
                        return (
                            <option key={option?.value} value={option?.value}>
                                {option?.title}
                            </option>
                        );
                    })}
                </select>
                <AddRemoveButton color='green' onClick={() => addBook(bookId)}>
                    Ok
                </AddRemoveButton>
            </div>
        </Modal>
    );
};

export default SelectShelfModal;
