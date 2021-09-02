import {createSlice} from "@reduxjs/toolkit";

const initState = {
    posts: null,
}

const postsSlice = createSlice({
    name: "posts",
    initialState: initState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        addPost(state, action) {
            state.posts.unshift(action.payload)
        },
        removePost(state, {payload}) {
            state.posts = state.posts.filter(e => e.id !== payload)
        },
        editPost(state, {payload}) {
            let postIndex = state.posts.findIndex(e => e.id === payload.id);
            state.posts[postIndex].body = payload.text
        }
    }
});

export const {setPosts, addPost,editPost, removePost} = postsSlice.actions;

export default postsSlice.reducer;
