import React, { Component } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export class Button extends Component{
    render(){
        const {children, style} = this.props;
        
        return (
            <View style={styles.outerContainer}>
                <TouchableOpacity style={styles.container}>
                    <Text style={styles.text}>{children}</Text>
                </TouchableOpacity>
            </View>
                );
    }
}

const styles = StyleSheet.create({
    outerContainer:{
        alignItems: 'flex-start',
    },
    container:{
        borderRadius:4,
        borderColor:'#007AFF',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 6,
        paddingRight: 6,
        margin: 2,
        alignItems: 'flex-start',
    },
    text:{
        color: '#007AFF'
    }
})