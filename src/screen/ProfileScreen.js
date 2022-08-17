import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {
  getUserFollowers,
  getUserFollowing,
  getStarredRepos,
} from '../api/index';

function ProfileScreen({route}) {
  const {user} = route?.params;
  const [info, setInfo] = useState({
    follower: 0,
    following: 0,
    starred: 0,
  });
  useEffect(() => {
    const fetchData = async () => {
      const [follower, following, starred] = await Promise.all([
        getUserFollowers(user.login),
        getUserFollowing(user.login),
        getStarredRepos(user.login),
      ]);
      setInfo({
        follower: follower?.length,
        following: following?.length,
        starred: starred?.length,
      });
    };

    fetchData();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: user?.avatar_url}} />
        <View style={styles.contentRight}>
          <Text style={styles.text}>User Name: {user.login}</Text>
          <Text style={styles.text}>
            Followers:{' '}
            {info?.follower < 30 ? info.follower : `${info.follower}+`}
          </Text>
          <Text style={styles.text}>
            Following:{' '}
            {info?.following < 30 ? info.following : `${info.following}+`}
          </Text>
          <Text style={styles.text}>
            Started Repos:{' '}
            {info?.starred < 30 ? info.starred : `${info.starred}+`}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 30,
    paddingHorizontal: 15,
    minWidth: 350,
    marginVertical: 10,
  },
  contentRight: {
    minWidth: 220,
  },
  image: {
    borderRadius: 50,
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 12,
    lineHeight: 20,
  },
});

export default ProfileScreen;
