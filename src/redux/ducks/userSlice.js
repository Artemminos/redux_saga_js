import {createSlice} from "@reduxjs/toolkit";

const initState = {
    users: null,
}
const userSlice = createSlice({
    name: "user",
    initialState: initState,
    reducers: {
        setUser(state, action) {
            state.users = action.payload;
        },

    }
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
