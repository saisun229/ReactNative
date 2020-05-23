/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';


export default class AskForLogin extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Edit Me',
    };
    this.handleChangeText = this.onHandleChangeText.bind(this);
  }

  onHandleChangeText(newText) {
    this.setState({
      value: newText,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Time Capsule</Text>
          <Text style={styles.titleTextIntro}>
            TimeCaps is a time capsule video sharing application for capturing
            the moments that matter today and sending them to the future.
          </Text>
        </View>
        <View style={styles.head}>
          <TextInput
               style={styles.text}
               defaultValue={this.state.value}
               onChangeText={this.handleChangeText}
             />
             <Text>{this.state.value} </Text>
          <Text style={styles.text}>
            With TimeCaps you can create and share video messages, to your own
            private social network. Each message is locked in a time capsule
            that can be set to open any time, from five minutes to 50 years in
            the future. You can add a location and share it with friends tagged
            from your phonebook. TimeCaps helps you share meaningful and
            surprising moments with friends and family, send yourself
            motivational reminders, capture memorable moments, predict the
            future and more. What would you send into the future? How far would
            you send it? Who would you send it to?
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aec8d2',
  },
  title: {
    backgroundColor: '#007982',
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  head: {
    backgroundColor: '#aec8d2',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  titleTextIntro: {
    padding: 30,
    color: '#edf0f3',
    fontSize: 20,
  },
  text: {
    color: 'black',
    fontSize: 15,
  },
  input:{
  color: "red"
  }
});
