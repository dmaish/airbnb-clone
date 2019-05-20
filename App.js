import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Explore, Inbox, Saved, Trips, Profile } from './screens';
import Icon from 'react-native-vector-icons/Ionicons';

const BottomTabNavigator = createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-search' color={ tintColor } size={24} />
      ),
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-heart-empty' color={ tintColor } size={24} />
      ),
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: 'TRIPS',
      tabBarIcon: ({tintColor}) => (
        <Image source={require('./assets/images/airbnb.png')} style={{height: 22, width:22, tintColor:tintColor}} />
      ),
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-chatboxes' color={ tintColor } size={24} />
      ),
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='ios-chatboxes' color={ tintColor } size={24} />
      ),
    }
  }
},
{
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      elevation: 5,
      shadowColor: 'black',
    }
  }
},);

export default createAppContainer(BottomTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
