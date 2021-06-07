import { useEffect } from 'react';
import { useApolloClient } from "@apollo/client";
import { useHistory } from "react-router";
import useAuthStorage from "../hooks/useAuthStorage";

const SignOut = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const history = useHistory();

  const signOut = async () => {
    try {
      await authStorage.removeAccessToken();
      apolloClient.resetStore();
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    signOut();
  }, []);

  return null;
};

export default SignOut;
