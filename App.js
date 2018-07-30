/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {NativeModules} from 'react-native';
//module.exports = NativeModules.ToastExample;
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class App extends Component{


  
componentDidMount()
{
  return NativeModules.ToastExample.show('AAA', NativeModules.ToastExample.SHORT)
}


  render() {
   return null
  }
}


