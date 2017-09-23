import React, { Component } from 'react';
import {View, Text, TabBarIOS, StyleSheet } from 'react-native';

export class BottomTabNavigationMenu extends Component{
    constructor(){
        super();
        this.state = {
            selectedTab: 'tabDownloads'
        };
    }
    render(){
        return (
            <TabBarIOS>
               <TabBarIOS.Item
                title="Cities"
                selected={this.state.selectedTab === 'tabDownloads'}
                onPress={() => this.setState({selectedTab: 'tabDownloads'})}>
                <TabDownloads/>
                </TabBarIOS.Item>

                <TabBarIOS.Item
                title="My trips"
                selected={this.state.selectedTab === 'tabFavorites'}
                onPress={() => this.setState({selectedTab: 'tabFavorites'})}>
                <TabFavorites/>
                </TabBarIOS.Item>
        
                <TabBarIOS.Item
                systemIcon="more"
                selected={this.state.selectedTab === 'tabMore'}
                onPress={() => this.setState({selectedTab: 'tabMore'})}>
                <TabMore/>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    };
}

class TabFavorites extends React.Component {
    
      render() {
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabText}>Favorites</Text>
          </View>
        );
      }
    
    }
    
    /**
     * Downloads Tab
     */
    class TabDownloads extends React.Component {
    
      render() {
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabText}>Downloads</Text>
          </View>
        );
      }
    
    }
    
    /**
     * More Tab
     */
    class TabMore extends React.Component {
    
      render() {
        return (
          <View style={styles.tabContent}>
            <Text style={styles.tabText}>More</Text>
          </View>
        );
      }
    
    }
    
    var styles = StyleSheet.create({
      tabContent: {
        flex: 1,
        alignItems: 'center'
      },
      tabText: {
        margin: 50,
        fontSize: 40
      }
    });
    