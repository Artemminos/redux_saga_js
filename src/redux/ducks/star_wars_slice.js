import {createSlice} from "@reduxjs/toolkit";

const initState = {
    members: [],
    planets: []
}
const star_wars_slice = createSlice({
    name: "StarWars",
    initialState: initState,
    reducers: {
        setMembers(state, action) {
            state.members = action.payload
        },
        setPlanets(state, action) {
            state.planets = action.payload
        }
    }
});

export const { setPlanets, setMembers} = star_wars_slice.actions;

export default star_wars_slice.reducer;
