import {spawn, all, call,} from "redux-saga/effects";

import {watchLoadDataSaga} from "./sagas/loadSwData/loadSwData";
import {post_saga} from "./ducks/posts/post_saga";
import {user_saga} from "./ducks/user/user_saga";


export default function* rootSaga() {
    const sagas = [watchLoadDataSaga,user_saga, post_saga]

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
