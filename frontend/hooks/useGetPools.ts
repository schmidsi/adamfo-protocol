import { gql, useQuery } from "@apollo/client";

export const useGetPools = () => {
  const { loading, error, data } = useQuery(
    gql`
      query GetPools {
        pools {
          id
          members
          poolFrens {
            deptCredit
            fren {
              id
            }
          }
        }
      }
    `,
    {
      // variables: { address },
    }
  );

  const pools = data?.pools || [];

  return { loading, error, pools };
};
