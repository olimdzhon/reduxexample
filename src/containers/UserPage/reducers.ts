import { PayloadAction } from "@reduxjs/toolkit";
import { ActionTypes } from "./constants";

const defaultState = {
  user: null,
};

export default function userPageReducer(
  state = defaultState,
  action: PayloadAction<any>
) {
  switch (action.type) {
    case ActionTypes.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
