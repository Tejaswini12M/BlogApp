import React,{Component} from 'react';
import { StyleSheet, Text, View,Image, ScrollView } from 'react-native';

import {card,cardItem,Thumbnail,Body,Left,Right,Button,Icon, CardItem} from 'native-base';

export default class CardComponent extends Component {

  
  render(){
    return (
      <View style={styles.container}>
          <CardItem cardBody>
          <Image style={styles.image} 
          source={require('../assets/up2date_building.jpg')}/>
          </CardItem>
        <View>
        
            <Text style={styles.subHeaderText}>
                5 things to read all about the garden at your balcony.
            </Text>
           
            <View>
            {/* <Icon style={{paddingRight:20,color:'#43BE31',fontSize:30}} name="ios-share"/>  */}
            </View>
         </View>
         <ScrollView>
             <Text style={{fontSize:15,paddingRight:10,paddingLeft:10}}>
             In gardening, a terrace is an element where a raised flat paved or graveled section overlooks a prospect.
              A raised terrace keeps a house dry and provides a transition between the hard materials of the architecture 
              and softer ones of the garden. We have a very long tradition of gardening and landscaping. 
              </Text>
              <Text style={{fontSize:15,paddingRight:10,paddingLeft:10}}>Our literatures 
              and mythologies are full of references to these. Man always thought of natural landscape as his ideal habitat.
              Adam originally lived in the Garden of Eden. 
              Man always thought of natural landscape as his ideal habitat.
               
             
             </Text>
         </ScrollView>
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
  image:{
      flex:1,
      width:null,
      height:250,
  },
  subHeaderText:{
    fontSize:20,
    paddingRight:10,
    paddingLeft:10
  }
});
