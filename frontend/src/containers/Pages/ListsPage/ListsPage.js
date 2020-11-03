import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allListBookShelves } from '../../../actions/bookShelfListActions';
import BookShelf from '../../../components/BookshelfBar/Bookshelf/Bookshelf';
import StyledListPage from './ListsPage.styled';

const ListsScreen = ({ token }) => {
    const dispatch = useDispatch();
    const allBookShelfList = useSelector((state) => state.allBookShelfList);
    const { bookShelvesList } = allBookShelfList;

    useEffect(() => {
        dispatch(allListBookShelves(token));
    }, [token, dispatch]);

    return (
        <StyledListPage>
            {bookShelvesList.map((shelf) => {
                return (
                    <BookShelf
                        key={shelf.id}
                        id={shelf.id}
                        title={shelf.title}
                        click={() => alert(shelf.title)}
                    />
                );
            })}
        </StyledListPage>
    );
};

export default ListsScreen;
