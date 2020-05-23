/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, {Component} from 'react';
import AskForLogin from './Components/Authenticate/AskForLogin';
import Title from "./Components/AppTitle/Title";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component {
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
          <Title />
        <View style={styles.head}>
          <TextInput
               style={styles.text}
               defaultValue={this.state.value}
               onChangeText={this.handleChangeText}
             />
             <Text>{this.state.value} </Text>
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
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 15,
  }
});
