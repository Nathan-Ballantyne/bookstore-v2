import React, { Component } from 'react';
import classes from './MainContent.module.css';
import NavCardBar from '../../components/NavCardBar/NavCardBar';
import BookDetailBar from '../../components/BookDetailBar/BookDetailBar';
import Modal from '../../components/UI/Modal/Modal';
import Book from '../../components/BookDetailBar/BookDetail/BookCover/BookCover';

class MainContent extends Component {
    books = [
        {
            id: 1,
            rating: 4.9,
            title: 'The Name of the Wind',
            author: 'Patrick Rothfuss',
        },
        {
            id: 2,
            rating: 4.9,
            title: 'The Wise Mans Fear',
            author: 'Patrick Rothfuss',
        },
        {
            id: 3,
            rating: 4.8,
            title: 'The Slow Regard of Silent Things',
            author: 'Patrick Rothfuss',
        },
    ];

    state = {
        book: null,
        showModal: false,
    };

    bookDetails = (id) => {
        console.log(id);
        this.setState({
            book: this.books.find((el) => el.id === id),
            showModal: true,
        });
    };

    modalClosed = () => {
        this.setState({ showModal: false });
    };

    render() {
        return (
            <div className={classes.MainContent}>
                <NavCardBar />
                <BookDetailBar
                    getBookDetails={this.bookDetails}
                    books={this.books}
                />
                <Modal
                    show={this.state.showModal}
                    modalClosed={this.modalClosed}>
                    <p>{this.state.book}</p>
                </Modal>
            </div>
        );
    }
}

export default MainContent;
