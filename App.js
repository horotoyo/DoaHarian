import React, {Component} from 'react';

import { Text, View } from 'react-native';
import { Container } from "native-base";
import { createAppContainer } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';

import AppNavigator from './src/router.js';
const AppContainer = createAppContainer(AppNavigator);
import { MenuProvider } from 'react-native-popup-menu';

export default class App extends Component {

	componentDidMount() {
  	SplashScreen.hide();
  }

  render() {
    return(
    	<MenuProvider>
    		<AppContainer />
    	</MenuProvider>
    );
  }
}