import {call, take, fork, put, select, takeEvery} from "redux-saga/effects";
import {getSW} from "../../../api/sw";
import {setMembers,setPlanets} from "../../ducks/star_wars_slice";
import {LOCATION_CHANGE} from "connected-react-router";

export function* loadPeople() {
    const people = yield call(getSW, 'people');//sync
    yield put({type: setMembers.type, payload: people})//sync
    return people
}

export function* loadPlaners() {
    const planets = yield call(getSW, 'planets');//sync
    yield put({type: setPlanets.type, payload: planets})//sync

}


export function* workerSaga() {
    yield fork(loadPeople);//async
    yield fork(loadPlaners);//async
    const store = yield select(s => s);
    console.log(store)//что бы в строе что то было нужно эфекты вызова сделать синхронными(блокирующими)
}

export function* watchLoadDataSaga() {
    while (true) {
        const {payload} = yield take(LOCATION_CHANGE);
        const blogPageReg = /blog$/i
        if (blogPageReg.test(payload.location.pathname)) {
            yield fork(workerSaga)
        }
    }
}

