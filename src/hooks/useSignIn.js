import { useApolloClient, useMutation } from '@apollo/client';

import { AUTHORIZE } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';


const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(AUTHORIZE);
  const apolloClient = useApolloClient();

  const signIn = async ({ username, password }) => {
    const result = await mutate({ variables: { credentials: { username, password } } });
    const { accessToken } = result.data.authorize;
    authStorage.setAccessToken(accessToken);
    apolloClient.resetStore();
    return result;
  };

  return [signIn, result];
};

export default useSignIn;
