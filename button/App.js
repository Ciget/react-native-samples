import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from './src/common';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Button>Sample</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    //flex: 1,
    backgroundColor: 'red',
    //alignItems: 'stretch',
  }
});
