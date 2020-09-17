import React from 'react';
import List from './SearchResults.styled';

const SearchResults = ({ results }) => {
    return (
        <List>
            {results.map((result) => {
                return (
                    <div key={result.id}>
                        <img style={{width: '36px', height: '60px', display: 'inline-block'}} src={result.volumeInfo.imageLinks.smallThumbnail} alt={result.volumeInfo.title} />
                        <li style={{display: 'inline-block'}}>{result.volumeInfo.title}</li>
                    </div>
                );
            })}
        </List>
    );
};

export default SearchResults;
