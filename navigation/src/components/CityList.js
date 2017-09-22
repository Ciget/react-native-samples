import React, { Component } from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {CityItemPreview } from './CityItemPreview';
import {BottomTabNavigationMenu} from './common/TabMenu';

export class CityList extends Component{
    componentWillMount(){
        this.cities = [
            {name: 'title', id: 1, thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}, 
            {name: 'title 2', id:2, thumbnail: 'https://facebook.github.io/react/img/logo_og.png'},
            {name: 'title 2', id:3, thumbnail: 'https://facebook.github.io/react/img/logo_og.png'},
            {name: 'title 2', id:4, thumbnail: 'https://facebook.github.io/react/img/logo_og.png'}
            
        ];
    }

    renderItem({item}){
        return <CityItemPreview city={item}/>;
    }
    render(){
        return (<View>
                    <FlatList data={this.cities}
                    style={styles.container}
                    renderItem={this.renderItem}
                    keyExtractor={(item, index)=>item.id}/>
                    <BottomTabNavigationMenu/>
            </View>);
    }
}

const styles= StyleSheet.create({
    container:{
        bottom: 52
    }
});