import React from 'react';
import classes from './SearchBar.module.css';

const SearchBar = () => {
    return (
        <input
            className={classes.SearchBar}
            placeholder={'Search books by name, genre or author'}
        />
    );
};

export default SearchBar;
