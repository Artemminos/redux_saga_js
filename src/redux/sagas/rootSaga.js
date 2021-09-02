import {spawn, all, call,} from "redux-saga/effects";

import {loadData} from "./loadUserData/loadUserData";
import {watchLoadDataSaga} from "./loadSwData/loadSwData";
import {posts} from "./posts/posts";


export default function* rootSaga() {
    const sagas = [watchLoadDataSaga, loadData,posts]

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
