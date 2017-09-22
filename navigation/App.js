import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {createStore } from 'redux';

import Router from './src/Router';
import reducers from './src/reducers';

export default class App extends Component {
  render() {
    return (<Provider store={createStore(reducers)}>
              <Router style={styles.container}/>
            </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
