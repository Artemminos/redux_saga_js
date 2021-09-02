import {all, put, call, fork, take, takeEvery} from "redux-saga/effects";
import {LOCATION_CHANGE} from "connected-react-router";
import {getPosts} from "api/posts";
import {editPost, removePost, addPost, setPosts} from "./postsSlice";
import {ADD_POST, EDIT_POST, REMOVE_POST} from "./contracts/action_types";


function* loadPosts() {
    const request = yield call(getPosts)
    yield put({
        type: setPosts.type,
        payload: request
    })
}

function* deletePost({payload}) {
    yield put({type: removePost.type, payload});
}

function* addPostSaga({payload}) {
    yield put({type: addPost.type, payload});
}

function* editPostSaga({payload}) {
    yield put({type: editPost.type, payload});
}

export function* post_saga() {
    while (true) {
        const {payload} = yield take(LOCATION_CHANGE);
        const mainPageReg = /blog$/i
        if (mainPageReg.test(payload.location.pathname)) {
            yield fork(loadPosts)
        }
        yield all([
            takeEvery(REMOVE_POST, deletePost),
            takeEvery(ADD_POST, addPostSaga),
            takeEvery(EDIT_POST, editPostSaga),
        ])
    }

}
