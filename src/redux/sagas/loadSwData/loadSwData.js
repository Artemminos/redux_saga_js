import {call, fork, put, select, takeEvery} from "redux-saga/effects";
import {getSW} from "../requests/sw";
import {getUserSW, setPlanetsSw, setUserSW} from "../../ducks/userSlice";

export function* loadPeople() {
    const people = yield call(getSW, 'people');//sync
    yield put({type: setUserSW.type, payload: people})//sync
    return people
}

export function* loadPlaners() {
    const planets = yield call(getSW, 'planets');//sync
    yield put({type: setPlanetsSw.type, payload: planets})//sync

}


export function* workerSaga() {
    yield fork(loadPeople);//async
    yield fork(loadPlaners);//async
    const store = yield select(s => s);
    console.log(store)//что бы в строе что то было нужно эфекты вызова сделать синхронными(блокирующими)
}

export function* watchLoadDataSaga() {
    yield takeEvery(getUserSW.type, workerSaga);
}

