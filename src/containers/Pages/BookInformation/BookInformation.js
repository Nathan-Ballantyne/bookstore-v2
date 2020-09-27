import React, { useState, useEffect } from 'react';
import BookPage, { Cover } from './BookInformation.styled';
import { TitleStyleSmall } from '../../../components/UI/Title/Title.styled';
import axios from 'axios';
import parse from 'html-react-parser';
import AddRemoveButton from '../../../components/UI/Button/AddRemoveButton.styled';
//import addIcon from '../../../assets/Icons/add-button-icon.png';
//import Spinner from '../../../components/UI/Spinner/Spinner';

const BookInformation = () => {
    const [bookId, setbookId] = useState('');
    const [bookInformation, setbookInformation] = useState({});
    // const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        //book id is the second item in the path array
        const path = window.location.pathname.split('/');
        const id = path[2];
        setbookId(id);
        if (bookId !== '') {
            axios
                .get(
                    `https://www.googleapis.com/books/v1/volumes/${id}?key=${process.env.REACT_APP_GOOGLE_API_KEY}`
                )
                .then((res) => {
                    setbookInformation(res.data);
                    //setLoaded(true);
                    console.log(res.data);
                })
                .catch(console.log);
        }
    }, [bookId]);

    return (
        <BookPage>
            <Cover
                src={bookInformation?.volumeInfo?.imageLinks?.thumbnail}
                alt={bookInformation?.volumeInfo?.title + ' img'}
            />
            {bookInformation?.saleInfo?.listPrice?.currencyCode !==
            undefined ? (
                <p>
                    <strong>Price: </strong>
                    {bookInformation?.saleInfo?.listPrice?.currencyCode +
                        ' $' +
                        bookInformation?.saleInfo?.listPrice?.amount}
                </p>
            ) : null}
            <span>
                <TitleStyleSmall>
                    {bookInformation?.volumeInfo?.title}
                </TitleStyleSmall>
                <AddRemoveButton color='#5eaaa8'>Add</AddRemoveButton>
                <p>
                    <strong>Author: </strong>
                    {bookInformation?.volumeInfo?.authors?.join(', ')}
                </p>
                {parse(bookInformation?.volumeInfo?.description ?? '')}
                <p>
                    <strong>Pages: </strong>
                    {bookInformation?.volumeInfo?.pageCount}
                </p>
                <p>
                    <strong>Published: </strong>
                    {bookInformation?.volumeInfo?.publishedDate}
                </p>
            </span>
        </BookPage>
    );
};

export default BookInformation;
