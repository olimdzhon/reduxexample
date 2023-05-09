import { PayloadAction } from "@reduxjs/toolkit";
import { ActionTypes } from "./constants";

const defaultState = {
  users: [],
};

export default function homePageReducer(
  state = defaultState,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
