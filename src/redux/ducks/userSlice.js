import {createSlice} from "@reduxjs/toolkit";

const initState = {
    users: [],
    planets: []
}
const userSlice = createSlice({
    name: "user",
    initialState: initState,
    reducers: {
        getUser() {
        },

        setUser(state, action) {
            const userData = action.payload;
            return {...state, ...userData};
        },
        getUserSW() {
        },
        setUserSW(state, action) {
            const userData = action.payload;

            state.users = userData

        },
        setPlanetsSw(state, action) {
            const planetsData = action.payload;
            state.planets = planetsData
        }
    }
});

export const {getUser, setUser, getUserSW, setUserSW,setPlanetsSw} = userSlice.actions;

export default userSlice.reducer;
