import {Image, View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

function ProfileCard({user}) {
  const navs = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.cardTemplate}>
        <View style={styles.cardHead}>
          <Image style={styles.image} source={{uri: user?.avatar_url}} />
          <View style={styles.rightCardHead}>
            <Text>Name: {user?.name}</Text>
            <Text style={styles.imageText}>User Name: {user?.login}</Text>
          </View>
        </View>
        <View style={styles.cardTail}>
          <Text>Description: {user?.bio}</Text>
          <View style={styles.cardTailText}>
            <Text
              onPress={() =>
                navs.navigate('Follower', {username: user?.login})
              }>
              {user?.followers?.toString()} followers
            </Text>
            <Text
              onPress={() =>
                navs.navigate('Following', {username: user?.login})
              }>
              {user?.following?.toString()} followings
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardTemplate: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 25,
    paddingHorizontal: 25,
    width: '100%',
    marginVertical: 10,
  },
  cardHead: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 14,
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  rightCardHead: {
    padding: 8,
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
  cardTail: {
    padding: 10,
  },
  cardTailText: {
    paddingTop: 10,
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default ProfileCard;
