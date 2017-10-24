import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {DownloadFile} from './src/download';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DownloadFile />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
