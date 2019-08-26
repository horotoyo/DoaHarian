import React, {Component} from 'react';

import { Text, View } from 'react-native';
import { Container } from "native-base";
import { createAppContainer } from 'react-navigation';

import AppNavigator from './src/router.js';
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return(
      <AppContainer />
    );
  }
}