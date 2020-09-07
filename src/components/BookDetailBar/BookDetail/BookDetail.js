import React, { useState } from 'react';
import BookCover from './BookCover/BookCover';
import Details from './Details/Details';
import Modal from '../../UI/Modal/Modal';
import classes from './BookDetail.module.css';

const BookDetail = (props) => {
    const [showModal, setShowModal] = useState(false);

    const showDetails = () => {
        setShowModal(true);
    };

    const modalClosed = () => {
        setShowModal(false);
    };

    return (
        <>
            <Modal show={showModal} modalClosed={modalClosed}>
                <p>{props.title}</p>
                <p>{props.subtitle}</p>
                <p>{props.description}</p>
                <p><strong>Author: </strong>{props.author}</p>
                <p><strong>Pages: </strong>{props.pagecount}</p>
                <p><strong>Published: </strong>{props.publishedDate}</p>
            </Modal>
            <div className={classes.BookDetail}>
                <BookCover img={props.img} />
                <Details
                    id={props.id}
                    rating={props.rating}
                    title={props.title}
                    author={props.author}
                    getBookDetails={showDetails}
                />
            </div>
        </>
    );
};

export default BookDetail;
