import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base';
import CardComponent from '../CardComponent';
import { ScrollView } from 'react-native-gesture-handler';

export default class HomeTab extends Component {

  static navigationOptions = {
    tabBarIcon:({tintColor})=>(
      <Icon name="ios-home" style={{color:tintColor}}/>
    )
  }

  render(){
    return (
      <View style={styles.container}>
       <ScrollView>
         <CardComponent/>
       </ScrollView>
      </View>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
