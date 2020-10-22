import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Bookshelf from './Bookshelf/Bookshelf';
import classes from './BookshelfBar.module.css';
import Spinner from '../UI/Spinner/Spinner';
import { listBookShelves } from '../../actions/bookShelfListActions';

const NavCardBar = ({ setShelfId }) => {
    const dispatch = useDispatch();
    const bookShelfList = useSelector((state) => state.bookShelfList);
    const { loading, bookShelves } = bookShelfList;

    const getShelf = (id) => {
        setShelfId(id);
    };

    useEffect(() => {
        dispatch(listBookShelves());
    }, [dispatch]);

    return (
        <div className={classes.NavCardBar}>
            {loading ? (
                <Spinner />
            ) : (
                bookShelves.map((shelf) => {
                    return (
                        <Bookshelf
                            key={shelf.id}
                            id={shelf.id}
                            title={shelf.title}
                            click={getShelf}
                        />
                    );
                })
            )}
        </div>
    );
};

export default NavCardBar;
