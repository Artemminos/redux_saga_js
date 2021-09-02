import {spawn, all, call,} from "redux-saga/effects";

import {loadData} from "./sagas/loadUserData/loadUserData";
import {watchLoadDataSaga} from "./sagas/loadSwData/loadSwData";
import {post_saga} from "./ducks/posts/post_saga";


export default function* rootSaga() {
    const sagas = [watchLoadDataSaga, loadData,post_saga]

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
