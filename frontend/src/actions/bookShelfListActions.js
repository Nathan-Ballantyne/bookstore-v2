import axios from 'axios';

import {
    BOOKSHELF_LIST_REQUEST,
    BOOKSHELF_LIST_SUCCESS,
    BOOKSHELF_LIST_FAIL,
} from '../constants/bookShelfListConstants';

export const listBookShelves = () => async (dispatch) => {
    try {
        dispatch({ type: BOOKSHELF_LIST_REQUEST });
        const { data } = await axios.get(
            `https://www.googleapis.com/books/v1/users/${process.env.REACT_APP_GOOGLE_USER_ID}/bookshelves`
        );
        dispatch({ type: BOOKSHELF_LIST_SUCCESS, payload: data.items });
    } catch (error) {
        dispatch({
            type: BOOKSHELF_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
