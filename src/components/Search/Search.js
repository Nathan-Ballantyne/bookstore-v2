import React from 'react';
import SearchBar from './SearchBar/SearchBar';

const Search = (props) => {
    return (
        <div>
            <SearchBar open={props.open} setOpen={props.setOpen} />
        </div>
    );
};

export default Search;
