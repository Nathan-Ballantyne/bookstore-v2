import React from 'react';
import Cover from './BookCover.styled';

const BookCover = ({ img }) => {
    return <Cover img={img} alt='book-img' />;
};

export default BookCover;
