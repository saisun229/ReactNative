
import React from "react";
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
export default function Title (){
     return (
         <View style={styles.title}>
           <Text>Time Capsule</Text>
         </View>
     );
 }
const styles = StyleSheet.create({
  title: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
