import { gql } from '@apollo/client';
import { REPOSITORY_FIELDS } from './fragments';


export const GET_REPOSITORIES = gql`
  ${REPOSITORY_FIELDS}
  query {
    repositories {
      ...RepositoryFields
    }
  }
`;

export const GET_AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;
