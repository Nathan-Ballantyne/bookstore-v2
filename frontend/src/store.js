import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { signedInReducer } from './reducers/signedInReducers';
import {
    bookShelfListReducer,
    allBookShelfListReducer,
} from './reducers/bookShelfListReducers';

const reducer = combineReducers({
    signedIn: signedInReducer,
    bookShelfList: bookShelfListReducer,
    allBookShelfList: allBookShelfListReducer,
});

// const signedInFromStorage = localStorage.getItem('bookstoreSignedIn')
//     ? JSON.parse(localStorage.getItem('bookstoreSignedIn'))
//     : false;

const initialState = {
    signedIn: false,
};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
