import React, {Component} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { Container, Header, Content, Footer } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Top extends Component {
  render() {
    return(
      <Footer style={styles.header}>
      	<View>
      		<TouchableOpacity>
      		  <Icon name="menu" size={27}
      		  	style={{
      		  		color: '#fff',

      		  	}}
      		  />
      		</TouchableOpacity>
      	</View>

      	<View>
      		<Text style={styles.title}>KUMPULAN DOA</Text>
      	</View>

      	<View>
      		<TouchableOpacity>
      		  <Icon name="search" size={27}
      		  	style={{
      		  		color: '#fff',

      		  	}}
      		  />
      		</TouchableOpacity>
      	</View>

      </Footer>
    );
  }
}

const styles = StyleSheet.create ({
	header: {
		backgroundColor: '#008297',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 80,
		paddingLeft: 15,
		paddingRight: 15,
	},
	title: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 16,
	}
});