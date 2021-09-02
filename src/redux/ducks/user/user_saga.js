import {all, put, call, fork, takeEvery, select} from "redux-saga/effects";
import {setUser} from "./user_slice";
import {getUser} from "api/user";

function* auth() {
    const request = yield call(getUser)
    yield put({
        type: setUser.type,
        payload: request
    })
}

function* loadUser() {
    const store = yield select(s => s);
    if (store.user.user === null) {
        yield call(auth)
    }
}

export function* user_saga() {
        yield all([
            fork(loadUser)
        ])
}
