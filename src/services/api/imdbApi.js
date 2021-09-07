import { gql } from '@apollo/client'

/**
 * @description Fetch Movies
 */
export const FETCH_MOVIES = (criteria)=>gql`
            query GetPopular {
                movies {
                 ${criteria}(first:20){
                  totalCount,
                  edges{
                    node{
                      id,
                      title,
                      backdrop(size:W780),
                      popularityIndex
                    }
                  }
                 }
                }
              }     
        `

