import { configureStore } from "@reduxjs/toolkit";
import authReducer  from "./authSlice";

const store = configureStore({
    reducer: authReducer
        // Add reducers here
});



export default store;