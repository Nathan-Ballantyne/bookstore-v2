import React, { Component } from 'react';
import classes from './MainContent.module.css';
import NavCardBar from '../../components/NavCardBar/NavCardBar';
import BookDetailBar from '../../components/BookDetailBar/BookDetailBar';
import Modal from '../../components/UI/Modal/Modal';
import Book from '../../components/BookDetailBar/BookDetail/BookCover/BookCover';

class MainContent extends Component {

    state = {
        book: null,
        showModal: false,
    };

    bookDetails = (id) => {
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
                    <Book />
                    <p>{this.state.book?.rating}</p>
                    <p>{this.state.book?.title}</p>
                    <p>{this.state.book?.author}</p>
                </Modal>
            </div>
        );
    }
}

export default MainContent;
