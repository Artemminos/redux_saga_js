import {all, call, delay, fork} from "redux-saga/effects";
import {loadPeople} from "../loadSwData/loadSwData";

function* auth() {
    yield delay(2000)
    return true;
}

function* loadUsers() {
    yield call(loadPeople)

}

export function* loadData() {
    yield all([
        fork(auth),
        fork(loadUsers)
    ])
}
