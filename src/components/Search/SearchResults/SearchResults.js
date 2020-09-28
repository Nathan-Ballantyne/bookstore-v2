import React from 'react';
import List, { Item, QuickInfo, ThumbNail } from './SearchResults.styled';
import quickInfoIcon from '../../../assets/Icons/read-more-icon.png';
import addIcon from '../../../assets/Icons/add-button-icon.png';
import Link from '../../UI/ReactLinkStyle/Link.styled';

const SearchResults = ({ results, term, showDetails, addBook, setSearch }) => {
    if (results === [] || term === '') {
        return null;
    }
    console.log(results);
    return (
        <List>
            {results.map((result) => {
                return (
                    <Item key={result.id}>
                        <QuickInfo
                            onClick={() =>
                                showDetails(result?.volumeInfo)
                            }
                            src={quickInfoIcon}
                            alt={'Quick Info'}
                        />
                        <ThumbNail
                            src={result?.volumeInfo?.imageLinks?.smallThumbnail}
                            alt={result.volumeInfo.title}
                        />

                        <Link
                            onClick={() => setSearch('')}
                            to={`/book/${result?.id}`}>
                            {result?.volumeInfo?.title}
                        </Link>
                        <QuickInfo
                            onClick={() => {
                                addBook(result.id);
                                setSearch('');
                            }}
                            src={addIcon}
                            alt={'add book'}
                        />
                    </Item>
                );
            })}
        </List>
    );
};

export default SearchResults;
