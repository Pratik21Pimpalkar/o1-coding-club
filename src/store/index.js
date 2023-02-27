import { configureStore } from "@reduxjs/toolkit";
import opportunitiesSlice from "./opportunities-slice";
import userDataSlice from "./userdata-slice";

const store = configureStore({
    reducer: { opportunities: opportunitiesSlice.reducer, userData: userDataSlice.reducer }
})
export default store