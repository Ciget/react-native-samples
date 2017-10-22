import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './src/components/ToDoList';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {ToDoReducers} from './src/reducers';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(ToDoReducers)}>
        <View style={{paddingTop:30}}>
            <ToDoList />
        </View>
      </Provider>
    );
  } 
}
