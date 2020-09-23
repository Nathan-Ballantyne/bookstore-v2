import React from 'react';
import List, { Item, QuickInfo, ThumbNail } from './SearchResults.styled';
import quickInfoIcon from '../../../assets/Icons/read-more-icon.png';

const SearchResults = ({ results, term, showDetails, addBook }) => {
    if (results === [] || term === '') {
        return null;
    }
    return (
        <List>
            {results.map((result) => {
                return (
                    <Item key={result.id}>
                        <QuickInfo
                            onClick={() => showDetails(result?.volumeInfo)}
                            src={quickInfoIcon}
                            alt={'Quick Info'}
                        />
                        <ThumbNail
                            onClick={() => addBook(result.id)}
                            src={result?.volumeInfo?.imageLinks?.smallThumbnail}
                            alt={result.volumeInfo.title}
                        />
                        <span>{result?.volumeInfo?.title}</span>
                    </Item>
                );
            })}
        </List>
    );
};

export default SearchResults;
