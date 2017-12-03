import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';

import MyTextInput from './MyTextInput';
import styles from './MyForm.styles';


function MyForm(props) {
  return (
    //const { handleSubmit} = props;
   
    <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Email</Text>
      <Field
        name={'email'}
        component={MyTextInput}
      />
      <TouchableOpacity onPress={props.handleSubmit}>
        <Text style={styles.formSubmit}>Submit!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}


export default reduxForm({
  form: 'signIn',
  validate: (values) => {
    const errors = {};
    errors.email = !values.email
      ? 'Email field is required'
      : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ? 'Email format is invalid'
        : undefined;
    return errors;
  },
})(MyForm);
