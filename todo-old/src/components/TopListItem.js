import React, { Component } from 'react';
import {StyleSheet, View} from 'react-native';
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
                        {/* <Input style={styles.input}
                        onChangeText={(text)=>{
                            this.changeText(text)
                        }
                        }
                        value={this.state.title}
                        /> */}

                        <Button style={styles.addButton}
                            onPress={()=>this.addNewItem()}
                            >Add item
                            </Button>
                    </View>);
    }
}

const mapStateToProps = ()=>{
    return {

    };
}

export default connect(mapStateToProps, actions)(TopListItem);

const styles = StyleSheet.create({
    container: {
        
      },
      input: {
        color: '#cf2525',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        borderWidth:10,
        borderColor:'#cf2525',
        backgroundColor: '#cf2525',
        borderColor: 'gray', 
        borderWidth: 1,
      },
      addButton:{
          width:50,
          backgroundColor: 'blue',
          borderWidth:2
      }
});