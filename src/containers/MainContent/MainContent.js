import React, { Component } from 'react';
import classes from './MainContent.module.css';
import NavCardBar from '../../components/NavCardBar/NavCardBar';
import BookDetailBar from '../../components/BookDetailBar/BookDetailBar';
import Modal from '../../components/UI/Modal/Modal';
import Book from '../../components/BookDetailBar/BookDetail/BookCover/BookCover';

class MainContent extends Component {
    books = [
        {id: 1, rating: 4.9, title: 'The Name of the Wind', author: 'Patrick Rothfuss'},
        {id: 2, rating: 4.9, title: 'The Wise Mans Fear', author: 'Patrick Rothfuss'},
        {id: 3, rating: 4.8, title: 'The Slow Regard of Silent Things', author: 'Patrick Rothfuss'},
    ];

    render() {
        return (
            <div className={classes.MainContent}>
                <NavCardBar />
                <BookDetailBar books={this.books} />
                <Modal show={false}>
                    <Book />
                </Modal>
            </div>
        );
    }
}

export default MainContent;
