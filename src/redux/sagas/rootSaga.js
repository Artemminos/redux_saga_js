import {spawn, all, call,} from "redux-saga/effects";

import {loadData} from "./loadUserData/loadUserData";
import {watchLoadDataSaga} from "./loadSwData/loadSwData";


export default function* rootSaga() {
    const sagas = [watchLoadDataSaga, loadData]

    const retrySagas = yield sagas.map(saga => {
        return spawn(function* () {
            while (true) {
                try {
                    yield call(saga);
                    break;
                } catch (e) {
                    console.log(e);
                }
            }
        })
    });
    yield all(retrySagas);
}
