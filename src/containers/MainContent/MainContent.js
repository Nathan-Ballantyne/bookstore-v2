import React, { useState } from 'react';
import MainContentStyle from './MainContent.styled';
import BookshelfBar from '../../components/BookshelfBar/BookshelfBar';
import BookDetailBar from '../../components/BookDetailBar/BookDetailBar';

const MainContent = ({ modalDetails, removeBook }) => {
    const [shelfId, setShelfId] = useState(0);

    return (
        <MainContentStyle>
            <BookshelfBar setShelfId={setShelfId} />
            <BookDetailBar
                removeBook={removeBook}
                detailClicked={modalDetails}
                shelfId={shelfId}
            />
        </MainContentStyle>
    );
};

export default MainContent;
