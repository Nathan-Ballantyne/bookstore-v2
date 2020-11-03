import axios from 'axios';

import {
    BOOKSHELF_LIST_REQUEST,
    BOOKSHELF_LIST_SUCCESS,
    BOOKSHELF_LIST_FAIL,
    ALL_BOOKSHELF_LIST_SUCCESS,
    ALL_BOOKSHELF_LIST_FAIL,
    ALL_BOOKSHELF_LIST_REQUEST,
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

export const allListBookShelves = (token) => async (dispatch) => {
    try {
        dispatch({ type: ALL_BOOKSHELF_LIST_REQUEST });
        const { data } = await axios.get(
            `https://www.googleapis.com/books/v1/mylibrary/bookshelves?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log(data);
        dispatch({ type: ALL_BOOKSHELF_LIST_SUCCESS, payload: data.items });
    } catch (error) {
        dispatch({
            type: ALL_BOOKSHELF_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
