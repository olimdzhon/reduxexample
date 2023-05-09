import { createSelector } from "reselect";

const homePageState = (state: any) => state.homePage;

export const makeSelectUsers = createSelector(
  homePageState,
  (homePage) => homePage.users
);
