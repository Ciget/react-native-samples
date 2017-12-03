import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";

export default class App extends React.Component {
  async logIn() {
    console.log("hi there");
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
      "134145290559058",
      {
        permissions: ["public_profile"]
      }
    );
    if (type === "success") {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`
      );
      console.log(await response.json());
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.logIn} title="fb" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
