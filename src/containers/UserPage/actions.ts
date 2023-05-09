import { ActionTypes } from "./constants";

export const setUser = (user: any) => ({
  type: ActionTypes.SET_USER,
  payload: user,
});
