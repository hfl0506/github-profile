import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
  Image,
} from 'react-native';

function UserList({users, type}) {
  const navs = useNavigation();
  return (
    <ScrollView refreshControl>
      {users?.length > 0 ? (
        users.map(user => (
          <TouchableOpacity
            id={user.node_id}
            style={styles.rowCard}
            onPress={() => navs.navigate('Profile', {user: user})}>
            <Image style={styles.image} source={{uri: user.avatar_url}} />
            <View style={styles.rowRight}>
              <Text style={styles.text}>User Name: {user.login}</Text>
              <Text style={styles.text}>Github Link: {user.html_url}</Text>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <View>
          <Text>No {type} exists.</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  rowCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    maxWidth: 350,
    marginVertical: 4,
  },
  rowRight: {
    minWidth: 220,
    alignItems: 'flex-start',
  },
  image: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  text: {
    paddingBottom: 5,
    fontSize: 12,
  },
});

export default UserList;
