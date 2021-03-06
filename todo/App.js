import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './src/components/ToDoList';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {ToDoReducers} from './src/reducers';
import {Button} from './src/components/common';

export default class App extends React.Component {
  render() {
    return (
     <Provider store={createStore(ToDoReducers)}> 
      
        <View style={styles.container}>
          <ToDoList/>
        </View>
      </Provider>
    );
  } 
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 40,
  }
});