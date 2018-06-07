/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NativeModules,
  TouchableHighlight
} from 'react-native';
// import ScreenRecorder from "react-native-screen-recorder";
import ScreenRecorder from './ScreenRecorder';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <ScreenRecorder
          style={styles.screenRecorder}
          ref={this.setScreenRecorderRef}>
          <TouchableHighlight onPress={()=>console.log('whoop')}>
            <Text>This button will be recorded</Text>
          </TouchableHighlight>
        </ScreenRecorder>
        <TouchableHighlight style={styles.button} onPress={this.startRecording}>
          <Text>startRecording</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={this.stopRecording}>
          <Text>stopRecording</Text>
        </TouchableHighlight>
      </View>
    );
  }

  setScreenRecorderRef = (ref) => {
    console.log('setRef: ', ref);
    this._screenRecorderRef = ref;
  }

  startRecording = async () => {
    console.log('startRecording');
    const res = await this._screenRecorderRef.startRecording();
    console.log('startRecording finished: ', res);
  };

  stopRecording = async () => {
    console.log('stopRecording');
    const res = await this._screenRecorderRef.stopRecording();
    console.log('recording finished, the video has been saved to:',res);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  screenRecorder: {
    backgroundColor: 'green',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  button: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  }
});
