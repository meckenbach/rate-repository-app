import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import Chip from './Chip';
import Statistic from './Statistic';

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: "3%",
    flexDirection: "column",
    height: 170,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  main: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: 10,
    height: 90,
    width: 250,
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
});

const kilofy = (count) => {
  return count >= 1000
    ? (count / 1000).toFixed(1) + 'k'
    : count;
};

const RepositoryItem = ({ fullName, description, language, stargazersCount, forksCount, reviewCount, ratingAverage, ownerAvatarUrl }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          style={styles.thumbnail}
          source={{
            uri: ownerAvatarUrl,
          }} />
        <View style={styles.main}>
          <Text fontSize='subheading' fontWeight='bold'>{fullName}</Text>
          <Text color='textSecondary'>{description}</Text>
          <Chip text={language} />
        </View>
      </View>
      <View style={styles.footer}>
        <Statistic label="Stars">{kilofy(stargazersCount)}</Statistic>
        <Statistic label="Forks">{kilofy(forksCount)}</Statistic>
        <Statistic label="Review">{kilofy(reviewCount)}</Statistic>
        <Statistic label="Rating">{kilofy(ratingAverage)}</Statistic>
      </View>
    </View>
  );
};

export default RepositoryItem;
