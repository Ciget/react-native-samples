import React, { Component } from 'react';
import {View, Text} from 'react-native';
import {Router, Scene, Stack} from 'react-native-router-flux';
import { CityList } from './components/CityList';
import { CityDetails } from './components/CityDetails';

export default class RouterComponent extends Component
{
    render(){
        return (<Router>
                    <Stack key="root">
                        <Scene key="cityList" component={CityList} title="City List"/>
                        <Scene key="cityDetails" component={CityDetails} title="Register"/>
                    </Stack>
                </Router>);
    }
}