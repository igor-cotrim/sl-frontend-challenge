import { gql, request } from "graphql-request";
import { useQuery } from "@tanstack/react-query";

export const QUERY_USER = gql`
  query QueryUser {
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
  return useQuery(["User"], async () => {
    const { users } = await request(`${process.env.REACT_APP_API_URL}`, QUERY_USER)

    return users
  });
}
