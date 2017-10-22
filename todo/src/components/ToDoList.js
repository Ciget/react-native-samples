import React, { Component } from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import ToDoItem from './ToDoItem';
import TopListItem from './TopListItem';
import {Input} from './common';
import {connect} from 'react-redux';
import * as actions from '../actions';

class ToDoList extends Component{
    constructor(props){
        super(props);

        this.state = {
            todos: this.props.todos
        }
    }


    render(){
        const {todos} = this.props;
        return (<View>
                    <TopListItem />
                    <FlatList 
                        data={todos}
                        renderItem={ ({item})=> <ToDoItem item={item} />}
                    />
            </View>);
    }
}

const mapStateToProps = (state)=>{
    return {
        todos: state && state.length>0?state:[]
    };
};

export default connect(mapStateToProps, actions)(ToDoList);