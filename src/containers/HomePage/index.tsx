import React, { useEffect } from "react";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import { setUsers } from "./actions";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { UsersList } from "./usersList";

const stateSelector = createSelector(makeSelectUsers, (users) => ({ users }));

const actionDispatch = (dispatch: Dispatch<AnyAction>) => ({
  setUsers: (users: any) => dispatch(setUsers(users)),
});

export function HomePage() {
  const { users } = useSelector(stateSelector);
  const { setUsers } = actionDispatch(useDispatch());

  const fetchUsers = async () => {
    const response = await Axios.get("https://reqres.in/api/users").catch(
      (err) => {
        console.log("Err: ", err);
        throw new Error(err.message);
      }
    );

    setUsers(response.data.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log("Users: ", users);

  return (
    <div>
      <UsersList />
    </div>
  );
}
