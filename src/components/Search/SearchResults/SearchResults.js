import React from 'react';
import List, {Item} from './SearchResults.styled';

const SearchResults = ({ results, term }) => {
    if (results === [] || term === '') {
        return null;
    }
    return (
        <List>
            {results.map((result) => {
                return (
                    <Item key={result.id}>
                        <img
                            src={result?.volumeInfo?.imageLinks?.smallThumbnail}
                            alt={result.volumeInfo.title}
                        />
                        <span>
                            {result?.volumeInfo?.title}
                        </span>
                    </Item>
                );
            })}
        </List>
    );
};

export default SearchResults;
