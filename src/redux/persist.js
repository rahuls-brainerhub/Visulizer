import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import globalSlice from "./slice/globalSlice";
import authSlice from "./slice/authSlice";

export const persistConfig = {
    key: "demo",
    version: 1,
    storage,
};
const combinedReducer = combineReducers({
    global: globalSlice,
    auth:authSlice
})

const rootReducer = (state, action) => {
    return combinedReducer(state, action)
}

export const persistedReducer = persistReducer(persistConfig, rootReducer);