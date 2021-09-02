export const REMOVE_POST = 'posts/REMOVE_POST';
export const ADD_POST = 'posts/ADD_POST';
export const EDIT_POST = 'posts/EDIT_POST';

export const remove_post = (data) => ({type: REMOVE_POST, payload: data});
export const add_post = (data) => ({type: ADD_POST, payload: data});
export const edit_post = (data) => ({type: EDIT_POST, payload: data});
