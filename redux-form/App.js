import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import store from "./src/redux/store";
import MyForm from "./src/components/myForm";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyForm
          onSubmit={values =>
            Alert.alert('Submitted!', JSON.stringify(values))}
        />
      </Provider>
    );
  }
}
