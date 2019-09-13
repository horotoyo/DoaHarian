import React, { Component } from 'react';
import {StatusBar,Text,Image,FlatList,TouchableOpacity,TouchableHighlight,ScrollView,Dimensions,Animated,View,StyleSheet} from 'react-native';
import {Container,Header,Right,Left,Content,Body,Button} from 'native-base';
import Icon from "react-native-vector-icons/MaterialIcons";
import DaftarIsi from './data/DaftarIsi.json';

export default class Main extends Component
{
  render() {
    const {navigation}  = this.props;
    return (
      <Container>
        
        <Header style={s.header} androidStatusBarColor="#0173bf">
          <View style={{paddingLeft: 80}}>
            <Text style={s.headertitle}>DOA DOA SEHARI HARI</Text>
          </View>
          <View style={{marginRight: 10}}>
            <TouchableOpacity style={{}} onPress={()=>this.props.navigation.navigate('About')}>
                <Icon name="info" size={25} style={{color: '#fff'}} />
            </TouchableOpacity>
          </View>
        </Header>

        <ScrollView
          scrollEventThrottle={16}
          style={{flex: 1}}
        >
      
          <FlatList
            style={s.vfl}
            data={DaftarIsi}
            keyExtractor={(daftar, index) => index.toString()}
            renderItem={ (daftar) => (
              <View>
                <TouchableOpacity
                  style={s.fl}
                  onPress={()=>this.props.navigation.navigate('Doa',{pageId:daftar.item.id})}
                >
                  <View style={s.id}>
                    <Text style={{fontSize: 18,textAlign: 'center',color: '#fff', fontWeight: 'bold'}}>{daftar.item.id}</Text>
                  </View>
                  <View style={s.title}>
                    <Text style={{textAlign: 'justify',fontSize: 16, marginTop: 5}}>{daftar.item.title}</Text>
                  </View>
                </TouchableOpacity>
                <View style={{justifyContent: 'center', alignItems: 'center', marginBottom: 5, marginTop: 3}}>
                  <View style={s.childHr}/>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </Container>
    );
  }
}

const s = StyleSheet.create({
    header: {
      backgroundColor: '#098ee8',
      height: 90,
      alignItems: 'center',
      elevation: 5,
      justifyContent: 'space-between'
    },
    headertitle: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
      fontFamily: 'SourceSansPro'
    },
    naps:{
        marginLeft: 5,
        marginBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    vfl:{
        marginTop: 0,
        marginHorizontal: 5,
    },
    fl:{
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 5,
        marginBottom: 5,
        paddingVertical: 5,
        backgroundColor: '#fff',
    },
    id:{
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#098ee8',
        width: 30,
        height: 30,
        borderRadius: 8,
    },
    title:{
        margin: 5,
        width: '80%',
    },
    childHr:{
        height:1,
        backgroundColor: '#bfbfbf',
        width:'95%',
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
    },
    pop:{
      paddingVertical: 5,
      paddingHorizontal: 10
    }
});