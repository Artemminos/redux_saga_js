import {
    configureStore,
    combineReducers,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import userReducer from "./ducks/userSlice";
import postSlice from "./ducks/posts/postsSlice";
import logger from 'redux-logger'
import {connectRouter} from "connected-react-router";
import {createBrowserHistory} from "history";
import {routerMiddleware} from "connected-react-router";

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory()

const reducer = combineReducers({
    router: connectRouter(history),
    user: userReducer,
    post: postSlice,

});

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: false,
        }).concat(sagaMiddleware).concat(routerMiddleware(history)).concat(logger),
});
sagaMiddleware.run(rootSaga);

export default store;
