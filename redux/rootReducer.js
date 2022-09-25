import { combineReducers } from "redux";
import { dataOfImages } from "./setResultReducer";
import { configureStore } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
	dataOfImages,
})

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
})

