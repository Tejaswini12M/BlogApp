import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class ReminderScreen extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View >
          <Text>ReminderScreen</Text>
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
