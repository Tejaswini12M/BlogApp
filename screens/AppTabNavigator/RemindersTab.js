import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base';

export default class RemindersTab extends Component {
  static navigationOptions = {
    tabBarIcon:({tintColor})=>(
      <Icon name="ios-book" style={{color:tintColor}}/>
    )
  }
  
  render(){
    return (
      <View style={styles.container}>
        <View >
          <Text>RemindersTab</Text>
          </View>
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
