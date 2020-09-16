import React from 'react';
import SearchButtonStyled from './SearchButton.styled';

const SearchButton = () => {
    return <SearchButtonStyled onClick={() => alert('Search')} />;
};

export default SearchButton;
