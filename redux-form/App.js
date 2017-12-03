import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import store from "./src/redux/store";
import MyComponent from "./src/MyComponent";
import { Provider } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyComponent
          onSubmit={values =>
            Alert.alert('Submitted!', JSON.stringify(values))}
        />
      </Provider>
    );
  }
}
