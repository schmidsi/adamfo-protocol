import { gql, useQuery } from "@apollo/client";

export const useGetPoolDetails = (id: string) => {
  const { loading, error, data } = useQuery(
    gql`
      query GetPool($id: String!) {
        pool(id: $id) {
          id
          members
          poolFrens {
            id
            deptCredit
            fren {
              id
            }
          }
        }
      }
    `,
    {
      variables: { id },
    }
  );

  const poolDetails = data?.pool;

  return { loading, error, poolDetails };
};
