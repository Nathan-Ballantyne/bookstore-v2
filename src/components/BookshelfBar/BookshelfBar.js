import React from 'react';
import Bookshelf from './Bookshelf/Bookshelf';
import classes from './BookshelfBar.module.css';

const NavCardBar = (props) => {
    return (
        <div className={classes.NavCardBar}>
            {props.bookshelves.map((shelf) => {
                return (
                    <Bookshelf
                        key={shelf.id}
                        id={shelf.id}
                        title={shelf.title}
                        click={props.changeShelf}
                    />
                );
            })}
        </div>
    );
};

export default NavCardBar;
