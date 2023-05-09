import React from "react";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./selectors";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const UsersContainers = styled.div`
  width: "100%";
  display: flex;
  justify-content: space-evenly;
`;

const UserWrapper = styled.div`
  display: flex;
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

const stateSelector = createSelector(makeSelectUsers, (users) => ({ users }));

export function UsersList() {
  const { users } = useSelector(stateSelector);

  const isEmptyUsers = !users || (users && users.length === 0);

  const navigate = useNavigate();

  const goToUserPage = (id: string) => {
    navigate(`/user/${id}`);
  };

  if (isEmptyUsers) return <></>;

  return (
    <UsersContainers>
      {users.map((user: any, idx: number) => (
        <UserWrapper key={idx} onClick={() => goToUserPage(user.id)}>
          <UserImage>
            <img src={user.avatar} />
          </UserImage>
          <UserName>
            {user.first_name} {user.last_name}
          </UserName>
        </UserWrapper>
      ))}
    </UsersContainers>
  );
}
