import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchButton from '../UI/SearchButton/SearchButton';
import SearchStyle from './Search.styled';

const Search = (props) => {

    return (
        <SearchStyle>
            <SearchBar open={props.open} setOpen={props.setOpen} />
            <SearchButton />
        </SearchStyle>
    );
};

export default Search;
