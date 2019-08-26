import React, { Component } from 'react';
import {Alert,Dimensions,FlatList,Clipboard,TouchableOpacity,View,ScrollView,StyleSheet,YellowBox,StatusBar} from 'react-native';
import {Header,Content,Title,Left,Right,Button,Body,Text,Container,Card,CardItem} from 'native-base';
import Icon from "react-native-vector-icons/MaterialIcons";
import DataDoa from '../data/DataDoa.json';

export default class Ayat extends Component
{
    id      = this.props.navigation.getParam('pageId');
    index   = parseInt(this.id) - 1;
    data    = DataDoa[this.index];

    render() {
      const {navigation}  = this.props;
      const index         = parseInt(this.id) - 1;
      return (
        <View style={{width: Dimensions.get('window').width, backgroundColor: '#e5e5e5', height: Dimensions.get('window').height, marginBottom: 20}}>
          <StatusBar hidden={false}/>
          <Header style={s.header} androidStatusBarColor="#0173bf">
            <Left>
            <TouchableOpacity>
              <Button transparent onPress={()=>this.props.navigation.goBack()}>
                <Icon name="arrow-back" size={25} style={{color: '#fff'}}/>
              </Button>
            </TouchableOpacity>
            </Left>
            <Body>
              <Title>Doa Sehari Hari</Title>
            </Body>
            <Right>
            <TouchableOpacity>
              <Button transparent>
                <Icon name="more-vert" size={20} style={{color: '#fff'}} />
              </Button>
            </TouchableOpacity>
            </Right>
          </Header>

          <FlatList
            data={DataDoa}
            keyExtractor={(doa, index)=>index.toString()}
            getItemLayout={(doa, index)=>(
                {length: Dimensions.get('window').width, offset: Dimensions.get('window').width * index, index}
            )}
            initialScrollIndex={index}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            renderItem={ (doa) => (
              <ScrollView style={s.scrolldetail}>
                <View style={{marginHorizontal: 15,marginTop: 15, marginBottom: 50, backgroundColor: '#fff',height: '100%',padding: 15,}}>
                  <View header bordered style={{flex: 1,justifyContent: 'flex-start',alignItems: 'center',flexDirection: 'row'}}>
                    <View style={s.id}>
                      <Text style={{fontSize: 13,textAlign: 'center',color: '#098ee8', fontWeight: 'bold'}}>{doa.item.id}</Text>
                    </View>
                    <Text style={{textAlign: 'center', color: '#098ee8', fontWeight: 'bold', fontSize: 18}}>{doa.item.title}</Text>
                  </View>
                  <View>
                    <View style={{justifyContent: 'center',alignItems: 'center',}}>
                      <Text style={s.arb}>{doa.item.arab}</Text>
                      <Text style={s.ltn}>{doa.item.latin}</Text>
                      <Text style={s.art}>Artinya: "{doa.item.arti}"</Text>
                    </View>
                  </View>
                  <View style={{justifyContent:'center',flexDirection: 'row', marginBottom: 25, width: '100%', alignItems: 'center' }}>
                    <View style={{height: 1, backgroundColor: '#bfbfbf', width: '38%'}}>
                    </View>
                    <View style={{flexDirection: 'row', marginHorizontal: 10,alignItems: 'center'}}>
                      <Icon name="panorama-fish-eye" size={10} style={{color: '#bfbfbf'}} />
                      <Icon name="lens" size={15} style={{color: '#bfbfbf', marginHorizontal: 5}} />
                      <Icon name="panorama-fish-eye" size={10} style={{color: '#bfbfbf'}} />
                    </View>
                    <View style={{height: 1, backgroundColor: '#bfbfbf', width: '38%'}}>
                    </View>
                  </View>
                </View>
              </ScrollView>
          )}
        />
        </View>
      );
    }
}

const s = StyleSheet.create({
    header: {
      backgroundColor: '#098ee8',
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      justifyContent: 'space-between',
      paddingLeft: 10,
      paddingRight: 10,
    },
    headertitle: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
    },
    id:{
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#098ee8',
        borderWidth: 1,
        width: 20,
        height: 20,
        borderRadius: 50,
    },
    arb:{
        fontSize: 30,
        justifyContent: 'flex-end',
        marginBottom: 15,
        color: '#4f4e4e',
        lineHeight: 50,
    },
    ltn:{
      fontSize: 15,
      color: '#098ee8',
      marginVertical: 10,
      lineHeight: 25,
    },
    art:{
      fontSize: 15,
      marginTop: 10,
      textAlign: 'justify',
      color: '#4f4e4e',
      marginBottom: 30,
      lineHeight: 25,
    },
    scrolldetail:{
      width: Dimensions.get('window').width,
      backgroundColor: '#e5e5e5',
    }
});