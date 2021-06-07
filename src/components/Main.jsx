import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import AppBarTab from './AppBarTab';
import SignIn from './SignIn';
import SignOut from './SignOut';
import theme from '../theme';
import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.background,
  },
});

const Main = () => {
  const { data, loading } = useQuery(GET_AUTHORIZED_USER);
  return (
    <View style={styles.container}>
      <AppBar>
        <AppBarTab path="/">Repositories</AppBarTab>
        {!loading && data?.authorizedUser
          ? <AppBarTab path="/signOut">Sign Out</AppBarTab>
          : <AppBarTab path="/signIn">Sign In</AppBarTab>}
      </AppBar>
      <Switch>
        <Route exact path="/">
          <RepositoryList />
        </Route>
        <Route path="/signIn">
          <SignIn />
        </Route>
        <Route path="/signOut">
          <SignOut />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
