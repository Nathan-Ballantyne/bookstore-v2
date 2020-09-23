import React from 'react';
import List, { Item, QuickInfo, ThumbNail } from './SearchResults.styled';
import quickInfoIcon from '../../../assets/Icons/read-more-icon.png';
import addIcon from '../../../assets/Icons/add-button-icon.png';

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
                            onClick={() => showDetails(result?.volumeInfo, true)}
                            src={quickInfoIcon}
                            alt={'Quick Info'}
                        />
                        <ThumbNail
                            src={result?.volumeInfo?.imageLinks?.smallThumbnail}
                            alt={result.volumeInfo.title}
                        />
                        <span style={{marginRight: '10px'}}>{result?.volumeInfo?.title}</span>
                        <QuickInfo onClick={() => addBook(result.id)} src={addIcon} alt={'add book'} />
                    </Item>
                );
            })}
        </List>
    );
};

export default SearchResults;
