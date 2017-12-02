import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { ScrollView, Text, TouchableOpacity, TextInput } from "react-native";

const phoneFormatter = number => {
  if (!number) return "";
  // NNN-NNN-NNNN
  const splitter = /.{1,3}/g;
  number = number.substring(0, 10);
  return (
    number
      .substring(0, 7)
      .match(splitter)
      .join("-") + number.substring(7)
  );
};

// remove dashes added by the formatter
const phoneParser = number => (number ? number.replace(/-/g, "") : "");

class MyForm extends Component {
  render() {
    <ScrollView style={styles.container} keyboardShouldPersistTaps={"handled"}>
      <Text style={{ fontWeight: "bold", marginTop: 20 }}>Phone number</Text>
      <Field
        name={"phoneNumber"}
        component={TextInput}
        placeholder={"NNN-NNN-NNNN"}
        format={phoneFormatter}
        parse={phoneParser}
      />
      <TouchableOpacity onPress={props.handleSubmit}>
        <Text style={styles.formSubmit}>Submit!</Text>
      </TouchableOpacity>
    </ScrollView>;
  }
}
export default reduxForm({
  form: "signIn"
})(MyForm);
