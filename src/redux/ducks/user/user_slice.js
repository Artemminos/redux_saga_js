import {createSlice} from "@reduxjs/toolkit";
import {initState} from "./contracts/state";


const userSlice = createSlice({
    name: "user",
    initialState: initState,
    reducers: {
        setUser(state, {payload}) {
            state.user = payload;
        },
    }
});

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
