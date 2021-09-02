import {spawn, all, call,} from "redux-saga/effects";
import {post_saga} from "redux/ducks/posts/post_saga";
import {user_saga} from "redux/ducks/user/user_saga";


export default function* rootSaga() {
    const sagas = [user_saga, post_saga]

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
