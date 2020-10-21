import {
    SIGNEDIN_SUCCESS,
    SIGNEDIN_FAIL,
} from '../constants/signedInConstants';

export const signIn = (signedIn) => async (dispatch) => {
    if (signedIn) {
        dispatch({ type: SIGNEDIN_SUCCESS });
    } else {
        dispatch({ type: SIGNEDIN_FAIL });
    }
};
