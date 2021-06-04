import React from 'react';
import { View } from 'react-native';
import Text from './Text';

const RepositoryItem = ({ fullName, description, language, stargazersCount, forksCount, ratingAverage }) => {
  return (
    <View>
      <Text>Full name: {fullName}</Text>
      <Text>Description: {description}</Text>
      <Text>Language: {language}</Text>
      <Text>Stars: {stargazersCount}</Text>
      <Text>Forks: {forksCount}</Text>
      <Text>Rating: {ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
