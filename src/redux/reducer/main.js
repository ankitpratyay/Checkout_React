import {combineReducers} from '@reduxjs/toolkit'
import { cartReducer } from "./cartReducer";

const rootreducer = combineReducers({
  cartReducer
});

export default rootreducer;
