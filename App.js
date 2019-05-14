import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Explore, Inbox, Saved, Trips } from './screens';
import Icon from 'react-native-vector-icons/Ionicons';

export class App extends Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
      return (
        <View style={styles.container}>
          <Text>First foot in the Native journey </Text>
        </View>
      );
    
  }
}

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
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/images/airbnb.png')} />
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
  }
});

export default createAppContainer(BottomTabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
