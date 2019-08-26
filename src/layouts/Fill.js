import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  FlatList
} from 'react-native';
import {
  Content,
  Container
} from 'native-base';

export default class Fill extends Component {
  render() {
    return (
      <Container>
        <ScrollView style={styles.fill}>

        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex:1,
    backgroundColor: '#eae8e8',
    paddingLeft: 15,
    paddingRight: 15,
  },
});