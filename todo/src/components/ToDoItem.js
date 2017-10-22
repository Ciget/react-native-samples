import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Button} from './common';
import * as actions from '../actions/index';
import {connect} from 'react-redux';

class ToDoItem extends Component{
    render()
    {
        const {title, isCompleted} = this.props.item;
        
        return (<View style={styles.item}>
                    <Button 
                        style={ isCompleted && {
                            display: 'none'
                        }}
                        onPress={
                        ()=>this.props.markAsDone(this.props.item)}
                        >Done</Button>
                        <Text
                            style={isCompleted && {
                                textDecorationLine: 'line-through'
                            }}
                        >{title}</Text>
                </View>);
    }
}

const mapStateToProps = (state)=>{
    return {

    }
}

export default connect(mapStateToProps, actions)(ToDoItem);

const styles = StyleSheet.create({
    text:{ 
        height: 40, 
        alignContent:'flex-start',
        borderColor: 'gray', 
        width:200,
        borderWidth: 1
    },
    item:{
        flex:1,
        flexDirection: 'row'
    }
});