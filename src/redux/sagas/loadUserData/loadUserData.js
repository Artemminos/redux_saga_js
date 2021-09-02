import {all,put, call, fork, take} from "redux-saga/effects";
import {loadPeople} from "../loadSwData/loadSwData";
import {LOCATION_CHANGE} from "connected-react-router";
import {getSWPEOPLE} from "../../../api/sw";
import {setUser} from "../../ducks/userSlice";

function* auth({payload}) {
    const {page, search} = payload;
    const request = yield call(getSWPEOPLE, page, search)
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
