import { createSelector } from "reselect";

const userPageState = (state: any) => state.userPage;

export const makeSelectUser = createSelector(
  userPageState,
  (userPage) => userPage.user
);
