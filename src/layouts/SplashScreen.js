import React, {Component} from 'react';
import { Text, View } from 'react-native';
import {Container,Content} from 'native-base';

export default class SplashScreen extends Component {
  render() {
    return(
    	<Container style={{backgroundColor: '#fff'}}>
    		<Content>
    			<View style={{justifyContent: 'center', alignItems: 'center'}}>
    				<Text>
    					Welcome...
    				</Text>
    			</View>
    		</Content>
    	</Container>
    );
  }
}