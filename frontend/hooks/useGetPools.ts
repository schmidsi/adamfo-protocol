import { gql, useQuery } from "@apollo/client";

export const useGetPools = (address?: string) => {
  const query = address
    ? gql`
        query GetPools($address: String!) {
          poolCreateds(where: { members_contains_nocase: [$address] }) {
            id
            childAddress
            members
          }
        }
      `
    : gql`
        query GetPools($address: String!) {
          poolCreateds {
            id
            childAddress
            members
          }
        }
      `;

  const { loading, error, data } = useQuery(query, {
    variables: { address },
  });

  const pools = data?.poolCreateds || [];

  return { loading, error, pools };
};
