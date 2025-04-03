import { configureStore } from "@reduxjs/toolkit";
import MHSlice from "./MHSlice";

const store = configureStore({
    reducer:{
        MH:MHSlice.reducer
    }
});
export default store;