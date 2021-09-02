import {all,put, call, fork, take} from "redux-saga/effects";
import {LOCATION_CHANGE} from "connected-react-router";
import {getUser} from "src/api/user";

function* auth({payload}) {
    const {page, search} = payload;
    const request = yield call(getUser, page, search)
    console.log(request)
    yield put({
        type: setUser.type,
        payload: request
    })
}

function* loadUsers() {
    yield call(loadPeople)
}

export function* loadData() {
    while (true) {
        const {payload} = yield take(LOCATION_CHANGE);
        const mainPageReg = /\/$/i
        if (mainPageReg.test(payload.location.pathname)) {
            yield all([
                fork(auth),
                fork(loadUsers)
            ])
        }
    }

}
