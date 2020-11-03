import {
    BOOKSHELF_LIST_REQUEST,
    BOOKSHELF_LIST_SUCCESS,
    BOOKSHELF_LIST_FAIL,
    ALL_BOOKSHELF_LIST_REQUEST,
    ALL_BOOKSHELF_LIST_SUCCESS,
    ALL_BOOKSHELF_LIST_FAIL,
} from '../constants/bookShelfListConstants';

export const bookShelfListReducer = (state = { bookShelves: [] }, action) => {
    switch (action.type) {
        case BOOKSHELF_LIST_REQUEST:
            return { loading: true, bookShelves: [] };
        case BOOKSHELF_LIST_SUCCESS:
            return { loading: false, bookShelves: action.payload };
        case BOOKSHELF_LIST_FAIL:
            return { loading: false, bookShelves: action.payload };
        default:
            return state;
    }
};

export const allBookShelfListReducer = (
    state = { bookShelvesList: [] },
    action
) => {
    switch (action.type) {
        case ALL_BOOKSHELF_LIST_REQUEST:
            return { loading: true, bookShelvesList: [] };
        case ALL_BOOKSHELF_LIST_SUCCESS:
            return { loading: false, bookShelvesList: action.payload };
        case ALL_BOOKSHELF_LIST_FAIL:
            return { loading: false, bookShelvesList: action.payload };
        default:
            return state;
    }
};
