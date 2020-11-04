import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allListBookShelves } from '../../../actions/bookShelfListActions';
import StyledListPage, { ListItem } from './ListsPage.styled';

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
                    <ListItem key={shelf.id}>
                        <div>{shelf.title}</div>
                    </ListItem>
                );
            })}
        </StyledListPage>
    );
};

export default ListsScreen;
