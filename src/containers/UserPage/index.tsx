import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { setUser } from "./actions";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUser } from "./selectors";
import styled from "styled-components";

const UserContainer = styled.div`
  width: "100%";
  display: flex;
  justify-content: center;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const UserImage = styled.div`
  width: 7em;
  height: 7em;
  img {
    width: 100%;
    height: 100%;
  }
`;

const UserName = styled.h3`
  font-size: 20px;
  color: #000;
  margin: 0;
`;

const UserEmail = styled.h3`
  font-size: 18px;
  color: #353535;
  margin: 0;
`;

const stateSelector = createSelector(makeSelectUser, (user) => ({ user }));

const actionDispatch = (dispatch: Dispatch<AnyAction>) => ({
  setUser: (user: any) => dispatch(setUser(user)),
});

export function UserPage() {
  const { user } = useSelector(stateSelector);
  const { setUser } = actionDispatch(useDispatch());

  const { userId } = useParams();

  const fetchUser = async (id: string) => {
    const response = await Axios.get(`https://reqres.in/api/users/${id}`).catch(
      (err) => {
        console.log("Err: ", err);
        throw new Error(err.message);
      }
    );

    console.log("User: ", response.data.data);

    if (response) setUser(response.data.data);
  };

  useEffect(() => {
    if (userId && userId !== "") fetchUser(userId);
  }, [userId]);

  if (!user) return <div>Loading...</div>;

  return (
    <UserContainer>
      <UserWrapper>
        <UserImage>
          <img src={user.avatar} />
        </UserImage>
        <UserName>
          {user.first_name} {user.last_name}
        </UserName>
        <UserEmail>{user.email}</UserEmail>
      </UserWrapper>
    </UserContainer>
  );
}
