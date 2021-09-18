import { gql } from '@apollo/client'

/**
 * @description Fetch Movies
 */
export const FETCH_MOVIES = (criteria,bdSize=780) => gql`
            query GetPopular {
                movies {
                 ${criteria}(first:20){
                  totalCount,
                  edges{
                    node{
                      id,
                      title,
                      overview,
                      backdrop(size:W${bdSize}),
                      popularityIndex,
                      genres{
                         name
                       }
                    }
                  }
                 }
                }
              }     
        `

