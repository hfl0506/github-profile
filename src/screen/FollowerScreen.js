import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getUserFollowers} from '../api';
import UserList from '../component/UserList';

function FollowerScreen({route}) {
  const [follower, setFollower] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (route?.params?.username) {
        const results = await getUserFollowers(route.params.username);
        if (results?.length > 0) {
          setFollower(results);
        }
      }
    };
    fetchData();
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <UserList users={follower} type="Follower" />
    </View>
  );
}

export default FollowerScreen;
