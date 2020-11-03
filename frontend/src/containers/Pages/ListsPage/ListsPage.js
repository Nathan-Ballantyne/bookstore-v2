import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allListBookShelves } from '../../../actions/bookShelfListActions';
import StyledListPage from './ListsPage.styled';

const ListsScreen = ({ token }) => {
    const dispatch = useDispatch();
    const allBookShelfList = useSelector((state) => state.allBookShelfList);
    const { bookShelvesList } = allBookShelfList;

    useEffect(() => {
        console.log('use effect triggered');
        dispatch(allListBookShelves(token));
    }, [token, dispatch]);

    return (
        <StyledListPage>
            {bookShelvesList.map((list) => {
                return <div key={list.id}>{list.title}</div>;
            })}
        </StyledListPage>
    );
};

export default ListsScreen;
