import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  downloadFile(){
    console.log('download file');
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.downloadFile}/>
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
