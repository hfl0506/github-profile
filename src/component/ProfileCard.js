import {Image, View, Text, StyleSheet} from 'react-native';
import React from 'react';

function ProfileCard(props) {
  return (
    <View style={styles.container}>
      <View style={styles.cardhead}>
        <Image style={styles.image} source={{uri: props.avatar_url}} />
        <Text style={styles.imageText}>User Name: {props.login}</Text>
      </View>
      <Text>Name: {props.name}</Text>
      <Text>Description: {props.bio}</Text>
      <Text onPress={() => navigation.navigate('Follower')}>
        {props.followers} followers
      </Text>
      <Text onPress={() => navigation.navigate('Follower')}>
        {props.following} followings
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  cardhead: {
    justifyContent: 'space-between',
    padding: 10,
  },
  image: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  imageText: {
    fontSize: 14,
    fontWeight: '400',
  },
});

export default ProfileCard;
