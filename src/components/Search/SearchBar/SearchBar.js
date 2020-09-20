import React, { useState, useEffect } from 'react';
import classes from './SearchBar.module.css';
import SearchResults from '../SearchResults/SearchResults';
import axios from 'axios';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        if (searchTerm !== '') {
            axios
                .get(
                    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm.replace(
                        ' ',
                        '+'
                    )}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
                )
                .then((response) => {
                    setSearchResults(response.data.items);
                    console.log(response.data.items);
                    console.log(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm.replace(
                        ' ',
                        '+'
                    )}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
                })
                .catch(console.log);
        } else {
            setSearchResults([]);
            setSearchTerm('');
        }
    }, [searchTerm]);

    return (
        <>
        <input
            className={classes.SearchBar}
            placeholder={'Search books by name, genre or author'}
            value={searchTerm}
            onChange={handleChange}
        />
        <SearchResults results={searchResults} term={searchTerm} />
        </>
    );
};

export default SearchBar;
