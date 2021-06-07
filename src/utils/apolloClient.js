import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Constants from 'expo-constants';

const APOLLO_URI = Constants.manifest.extra.apolloUri;
console.log(APOLLO_URI);

const httpLink = createHttpLink({
  uri: `${APOLLO_URI}/graphql`,
});

const createApolloClient = (authStorage) => {
  const authLink = setContext((_, { headers }) => {
    try {
      const accessToken = authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${accessToken}`,
        },
      };
    } catch (err) {
      console.log(err);
      return { headers };
    }
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
