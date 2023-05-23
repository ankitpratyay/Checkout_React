import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "../reducer/main";

export default configureStore({
    reducer:{
        rootReducer:rootreducer
    }
})