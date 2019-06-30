import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReportScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View >
          <Text>ReportScreen</Text>
          </View>
        <Text>app!</Text>
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
