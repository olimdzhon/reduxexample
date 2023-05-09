import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import homePage from "./containers/HomePage/reducers";
import userPage from "./containers/UserPage/reducers";

const reducers = combineReducers({ homePage, userPage });

export default configureStore({ reducer: reducers });
