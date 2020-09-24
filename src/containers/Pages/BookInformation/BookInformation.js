import React from 'react'
import BookPage from './BookInformation.styled';

const BookInformation = (props) => {
    return (
        <BookPage>
            <p>{props.title}</p>
                <p>{props.subtitle ?? ''}</p>
                <p>{props.description ?? ''}</p>
                <p>
                    <strong>Author: </strong>
                    {props?.authors?.join(', ') ?? ''}
                </p>
                <p>
                    <strong>Pages: </strong>
                    {props.pageCount ?? ''}
                </p>
                <p>
                    <strong>Published: </strong>
                    {props.publishedDate ?? ''}
                </p>
        </BookPage>
    )
}

export default BookInformation
