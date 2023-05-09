import { ActionTypes } from "./constants";

export const setUsers = (users: any) => ({
  type: ActionTypes.SET_USERS,
  payload: users,
});
