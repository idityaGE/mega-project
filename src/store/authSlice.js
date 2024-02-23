import { createSlice } from "@reduxjs/toolkit";

const initialState = {//initial state of the auth slice
    status: false,
    userData: null, 
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;//setting the user data in the state
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;//clearing the user data from the state
        }
    }
});

export const { login, logout } = authSlice.actions;//exporting the actions to use in the components

export default authSlice.reducer;//exporting the reducer to use in the store