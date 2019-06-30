import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base';

export default class SummaryTab extends Component {
  static navigationOptions = {
    tabBarIcon:({tintColor})=>(
      <Icon name="ios-search" style={{color:tintColor}}/>
    )
  }
 
  render(){
    return (
      <View style={styles.container}>
        <View >
          <Text>SummaryTab</Text>
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
