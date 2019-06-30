import React from 'react';
import { StyleSheet, Text, View, Style } from 'react-native';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import {Icon } from 'native-base';
import HomeScreen from './screens/Home';
import SummaryScreen from './screens/Summary';
import ReportScreen from './screens/Reports';
import ReminderScreen from './screens/Reminders';

const AppNavigator = createStackNavigator({
  Home:{
    screen:HomeScreen
  },
  Summary:{
    screen:SummaryScreen
  },
  Reports:{
    screen:ReportScreen
  },
  Reminders:{
    screen:ReminderScreen
  },
  

},
defaultNavigationOptions = {
  headerLeft:<Icon name="arrow-back"/>,
  headerTintColor:'#c1c1c1',
  title:"HOME",
  headerRight:<Icon style={{paddingRight:20}} name="ios-search"/>,
  headerStyle:{
      backgroundColor:"#BA2F16"
    },
  });

export default createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 });
