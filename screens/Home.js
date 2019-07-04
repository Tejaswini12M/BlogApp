import React,{Component} from 'react';
import { StyleSheet, Text, View,style,Platform } from 'react-native';
import {Icon, Button } from 'native-base';
import HomeTab from './AppTabNavigator/HomeTab';
import SummaryTab from './AppTabNavigator/SummaryTab';
import ReportsTab from './AppTabNavigator/ReportsTab';
import RemindersTab from './AppTabNavigator/RemindersTab';
// import CardComponent from './CardComponent';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

class HomeScreen extends Component {

  render(){
    return (
      <View style={styles.container}>
        <View >
          <Button title="Hioooo"></Button>
          </View>
      </View>
    );
  }
 }

const HomeTabNavigator = createBottomTabNavigator({
Home:{
    screen:HomeTab
},
Summary:{
    screen:SummaryTab
},
Reports:{
    screen:ReportsTab
},
Reminders:{
    screen:RemindersTab
}
},{

  navigationOptions:({navigation})=>{
    const {routeName} = navigation.state.routes[navigation.state.index]
    return {
      headerTitle: routeName
    }
  },
  animationEnabled:true,
  swipeEnabled:true,
  tabBarPosition:"bottom",
  tabBarOptions:{
    style:{
      ...Platform.select({
        android:{
          backgroundColor:'#0A3D62'
        }
      })
    },
        activeTintColor:'#43BE31',
    inactiveTintColor:'#7B8788'
  }
});
export default createAppContainer(HomeTabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
