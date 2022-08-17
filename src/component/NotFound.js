import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function NotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Not Found </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default NotFound;
