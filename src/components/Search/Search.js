import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import SearchStyle from './Search.styled';

const Search = (props) => {

    return (
        <SearchStyle>
            <SearchBar open={props.open} setOpen={props.setOpen} />
        </SearchStyle>
    );
};

export default Search;
