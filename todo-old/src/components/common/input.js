import React, { Component } from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

export class Input extends Component{
    
    render(){
        const {onChangeText, placeholder, value} = this.props;
        return (<View >
            <TextInput style={{paddingTop:2, paddingLeft: 5, paddingRight:5, paddingBottom:2,
                height:30, borderColor: 'gray', 
                borderRadius:5, borderWidth: 1}}
                autoCorrect={false}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
            />
        </View>);
    }
}
