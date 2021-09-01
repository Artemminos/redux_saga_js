import {
    configureStore,
    combineReducers,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import  rootSaga  from "./sagas/rootSaga";
import userReducer from "./ducks/userSlice";
import counterReducer from "./ducks/counter";
import logger from 'redux-logger'
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
    counter: counterReducer,
    user: userReducer,

});

const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: false,
        }).concat(sagaMiddleware).concat(logger),
});
sagaMiddleware.run(rootSaga);

export default store;
