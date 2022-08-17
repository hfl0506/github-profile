import React, {useState, useEffect} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';
import ProfileCard from '../component/ProfileCard';
import NotFound from '../component/NotFound';
import {getUser} from '../api/index';

function HomeScreen({navigation}) {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState(null);

  const onSearch = async text => {
    let lowercaseText = text.toLowerCase();
    setSearch(lowercaseText);
    const targetUser = await getUser(lowercaseText);
    setUser(targetUser);
  };

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Github User</Text>
      <TextInput
        value={search}
        onChangeText={text => onSearch(text)}
        style={styles.input}
      />
      <Button
        title="Go to Follwer"
        onPress={() => navigation.navigate('Follower')}
      />
      {user ? <ProfileCard {...user} /> : <NotFound />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderRadius: 4,
  },
});

export default HomeScreen;
