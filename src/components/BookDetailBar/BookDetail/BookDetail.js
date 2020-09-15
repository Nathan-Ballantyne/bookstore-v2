import React from 'react';
import BookCover from './BookCover/BookCover';
import Details from './Details/Details';
import classes from './BookDetail.module.css';

const BookDetail = (props) => {
    return (
        <div className={classes.BookDetail}>
            <BookCover img={props.img} />
            <Details
                id={props.id}
                rating={props.rating}
                title={props.title}
                subtitle={props.subtitle}
                description={props.description}
                pagecount={props.pagecount}
                publishedDate={props.publishedDate}
                author={props.author}
                getBookDetails={props.showDetails}
            />
        </div>
    );
};

export default BookDetail;
