import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';

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
const styles = StyleSheet.create({
    container: {
        paddingTop:50
    }
});