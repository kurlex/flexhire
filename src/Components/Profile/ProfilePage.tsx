import React from "react";
import { useLazyLoadQuery } from "react-relay";
import CurrentUserQuery from "../../Queries/CurrentUser";
import type { CurrentUserQuery as CurrentUserQueryType } from "../../Queries/__generated__/CurrentUserQuery.graphql";

const ProfilePage = () => {
  const data = useLazyLoadQuery<CurrentUserQueryType>(CurrentUserQuery, {});
  return <p>{data.currentUser?.name}</p>;
};

export default ProfilePage;
