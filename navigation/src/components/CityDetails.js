import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { BottomTabNavigationMenu } from './common/BottomTabNavigationMenu';
export class CityDetails extends Component{
    render(){
        const {name, id} = this.props.city;

        return (<View style={styles.container}>
                    <Text> Id: {id}</Text>
                    <Text> {name}</Text>
                    <BottomTabNavigationMenu/>
                </View>);
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        paddingTop:0,
        bottom: 0
    }
});