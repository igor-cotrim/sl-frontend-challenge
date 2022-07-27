import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";

import { userQuery } from "./__generated__/userQuery.graphql";

export const QUERY_USER = graphql`
  query userQuery {
    users {
      id
      name
      email
      phone
      password
      avatar
    }
  }
`;

export function useUsers() {
  const data = useLazyLoadQuery<userQuery>(QUERY_USER, {
    fetchPolicy: "store-or-network",
  });

  return data;
}
