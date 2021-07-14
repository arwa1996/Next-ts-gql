import { gql } from "@apollo/client";

export const QUERY_COUNTRIES = gql`
  query {
    countries {
      name
    }
  }
`;
