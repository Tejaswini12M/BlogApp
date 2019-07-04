import React,{Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Icon} from 'native-base';
import CardComponent from '../CardComponent';
import { ScrollView } from 'react-native-gesture-handler';

export default class HomeTab extends Component {

  constructor(props){
    super(props);
    this.state = {
      visible: false
    }
  }

  static navigationOptions = {
    tabBarIcon:({tintColor})=>(
      <Icon name="ios-home" style={{color:tintColor}}/>
    )
  }

  render(){

    const buttonText = this.state.visible? "Back": "Home";
    return (
      <View style={styles.container}>
       <ScrollView>
         {this.state.visible?<CardComponent/>: null}
         <Button title={buttonText} style={styles.button}
       onPress={()=>this.setState({visible: !(this.state.visible)})}
      />
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
 button:{
  alignItems: 'center',
  justifyContent: 'center',
  flex: 2,
  // marginTop: 50,
 }
});
