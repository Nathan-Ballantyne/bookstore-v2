import {
    SIGNEDIN_SUCCESS,
    SIGNEDIN_FAIL,
} from '../constants/signedInConstants';

export const signedInReducer = (state = false, action) => {
    switch (action.type) {
        case SIGNEDIN_SUCCESS:
            return true;
        case SIGNEDIN_FAIL:
            return false;
        default:
            return state;
    }
};
