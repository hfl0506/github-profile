import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getUserFollowing} from '../api';
import UserList from '../component/UserList';

function FollowingScreen({route}) {
  const [following, setFollowing] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      if (route?.params?.username) {
        const results = await getUserFollowing(route.params.username);
        if (results?.length > 0) {
          setFollowing(results);
        }
      }
    };
    fetchData();
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <UserList users={following} type="Following" />
    </View>
  );
}

export default FollowingScreen;
