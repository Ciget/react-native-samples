import React, { Component } from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export class Button extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {children} = this.props;
        return (<TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>);
    }
}

const styles = StyleSheet.create({
    container:{
        borderRadius:4,
        borderColor:'#007AFF',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 6,
        paddingRight: 6,
        margin: 2
    },
    text:{
        color: '#007AFF'
    }
})