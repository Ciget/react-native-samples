import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';

export class CityItemPreview extends Component{
    constructor(props){
        super();
    }
    render(){
        const {id, name, thumbnail} = this.props.city;

        return (<View>
                    <TouchableHighlight onPress={()=>{Actions.cityDetails({city: this.props.city})}}>
                        <View>
                            <Text>{name}</Text>
                        <Image source={
                            {uri: thumbnail}}
                            style={styles.thumbnail} /> 
                            </View>
                    </TouchableHighlight>
            </View>);
    }
}

const styles = StyleSheet.create({
    container:{

    },
    thumbnail: {
        height:200,
        width:300
    }
});
