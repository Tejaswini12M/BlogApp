import React,{Component} from 'react';
import { StyleSheet, Text, View,style,Platform } from 'react-native';
import {Icon } from 'native-base';
import HomeTab from './AppTabNavigator/HomeTab';
import SummaryTab from './AppTabNavigator/SummaryTab';
import ReportsTab from './AppTabNavigator/ReportsTab';
import RemindersTab from './AppTabNavigator/RemindersTab';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';

class HomeScreen extends Component {
// static defaultNavigationOptions = {
//   headerLeft:<Icon name="arrow-back"/>,
//   headerTintColor:'#c1c1c1',
//   title:"HOME",
//   headerRight:<Icon style={{paddingRight:20}} name="ios-search"/>,
//   headerStyle:{
//       backgroundColor:"#BA2F16"
//     },
//   }

  render(){
    return (
      <View style={styles.container}>
        <View >
          <Text>HomeScreen</Text>
          </View>
      </View>
    );
  }
 }

const TabNavigator = createBottomTabNavigator({
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
export default createAppContainer(TabNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
