import React from 'react';
import { StyleSheet, Text, View, Style } from 'react-native';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Icon } from 'native-base';
import HomeScreen from './screens/Home';
import SummaryScreen from './screens/Summary';
import ReportScreen from './screens/Reports';
import ReminderScreen from './screens/Reminders';


export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
}


const AppSwitchNavigator = createSwitchNavigator({
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
});


const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 });
