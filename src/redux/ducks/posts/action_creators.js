import {ADD_POST, EDIT_POST, REMOVE_POST} from "./contracts/action_types";


export const remove_post = (data) => ({type: REMOVE_POST, payload: data});
export const add_post = (data) => ({type: ADD_POST, payload: data});
export const edit_post = (data) => ({type: EDIT_POST, payload: data});
