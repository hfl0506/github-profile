import React, {useState, useEffect} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import ProfileCard from '../component/ProfileCard';
import NotFound from '../component/NotFound';
import {getUser} from '../api/index';
import {debounce} from 'lodash';

function HomeScreen() {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState(null);

  const onSearch = async text => {
    setSearch(text);
    handleTextChange(search);
  };
  const handleTextChange = debounce(async text => {
    const target = await getUser(text);
    setUser(target);
  }, 200);

  useEffect(() => {}, [user]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Github User</Text>
      <TextInput
        value={search}
        onChangeText={text => onSearch(text)}
        style={styles.input}
      />
      {user ? <ProfileCard user={user} /> : <NotFound />}
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
    backgroundColor: 'white',
  },
});

export default HomeScreen;
