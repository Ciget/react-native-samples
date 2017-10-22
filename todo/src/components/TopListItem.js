import React, { Component } from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Input, Button} from './common/index';
import {connect} from 'react-redux';
import * as actions from '../actions';

class TopListItem extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            title: ''
        }
    }

    changeText(text){
        this.setState((prevState)=>{
            return {
                ...prevState, 
                title: text
            }});
    }

    addNewItem(){
        this.props.addItem(this.state.title);
        this.setState({
            title: ''
        });
    }

    render(){
            return (<View style={styles.container}>
                        <Input style={styles.input}
                        onChangeText={(text)=>{
                            this.changeText(text)
                        }
                        }
                        value={this.state.title}
                        />

                        <Button
                            onPress={()=>this.addNewItem()}
                            >Add item</Button>
                    </View>);
    }
}

const mapStateToProps = ()=>{
    return {

    };
}

export default connect(mapStateToProps, actions)(TopListItem);

const styles = StyleSheet.create({
});