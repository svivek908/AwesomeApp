
import React from 'react';
import { StyleSheet, View} from 'react-native';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import Menu from '../sections/Menu';

export default function Home(props) {

  return (
    <View style={styles.container}>
      <Header {...props} message='please login' />
      <Hero />
      <Menu {...props} />
    </View>
  );
}


//css for Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
