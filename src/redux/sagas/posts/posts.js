import {all, put, call, fork, take, takeLatest} from "redux-saga/effects";
import {LOCATION_CHANGE} from "connected-react-router";
import {getPosts} from "../../../api/posts";
import {editPost, removePost, addPost, setPosts} from "../../ducks/posts/postsSlice";
import {ADD_POST, EDIT_POST, REMOVE_POST} from "../../ducks/posts/action_creators";

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

export function* posts() {
    while (true) {
        const {payload} = yield take(LOCATION_CHANGE);
        const mainPageReg = /blog$/i
        if (mainPageReg.test(payload.location.pathname)) {
            yield fork(loadPosts)
        }
        yield all([
            takeLatest(REMOVE_POST, deletePost),
            takeLatest(ADD_POST, addPostSaga),
            takeLatest(EDIT_POST, editPostSaga),
        ])
    }

}
