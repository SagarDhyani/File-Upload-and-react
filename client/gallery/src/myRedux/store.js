import { configureStore } from "@reduxjs/toolkit";

import imagedetailsReducer from "./imagedetailsSlice"

const store = configureStore({

    reducer: imagedetailsReducer,


})

export default store