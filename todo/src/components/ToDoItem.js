import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Button} from './common';
import * as actions from '../actions/index';
import {connect} from 'react-redux';

class ToDoItem extends Component{
    render()
    {
        const {title} = this.props.item;
        
        return (<View>
                    <Button onPress={()=>this.props.markAsDone(this.props.item)}>{title}</Button>
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
    }
});