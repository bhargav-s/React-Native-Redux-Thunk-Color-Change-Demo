import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import TodoApp from './src/TodoApp';
import store from './src/store'
import { Provider } from 'react-redux';
import BoxCon from './src/containers/box-container';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BoxCon />
       </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
