import React, { Component } from 'react';
import {Alert,Dimensions,FlatList,Clipboard,TouchableOpacity,View,ScrollView,StyleSheet,YellowBox,StatusBar} from 'react-native';
import {Header,Content,Title,Left,Right,Button,Body,Text,Container,Card,CardItem} from 'native-base';
import Icon from "react-native-vector-icons/MaterialIcons";
import DataDoa from '../data/DataDoa.json';
import {Menu, MenuOptions, MenuOption, MenuTrigger,} from 'react-native-popup-menu';

export default class Ayat extends Component
{
    id      = this.props.navigation.getParam('pageId');
    index   = parseInt(this.id) - 1;
    data    = DataDoa[this.index];

    render() {
      const {navigation}  = this.props;
      const index         = parseInt(this.id) - 1;
      return (
        <Container style={{width: Dimensions.get('window').width, backgroundColor: '#e5e5e5',}}>
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
              <Title style={{fontFamily: 'SourceSansPro',fontSize: 18, fontWeight: 'bold'}}>DOA SEHARI HARI</Title>
            </Body>
            <Right>
            <Menu>
              <MenuTrigger>
              <Icon name="more-vert" style={{color: '#fff',fontWeight: 'bold',fontSize: 30}} />
              </MenuTrigger>
              <MenuOptions>
              <MenuOption>
              <Text>Salin Doa</Text>
              </MenuOption>
              <MenuOption>
              <Text>Salin Arab</Text>
              </MenuOption>
              <MenuOption>
              <Text>Salin Terjemahan</Text>
              </MenuOption>
              <MenuOption>
              <Text>Salin Dalil</Text>
              </MenuOption>
              </MenuOptions>
              </Menu>
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
            <Content>
              <ScrollView style={s.scrolldetail}>
                <View style={{marginHorizontal: 15,marginTop: 15, marginBottom: 20, backgroundColor: '#fff',height: '100%',padding: 15,}}>
                  <View style={{justifyContent: 'flex-start', alignItems: 'center',flexDirection: 'row', marginTop: 10, marginBottom: 20}}>
                    <View style={s.id}>
                      <Text style={{fontSize: 13,textAlign: 'center',color: '#098ee8', fontWeight: 'bold',fontFamily: 'SourceSansPro',}}>{doa.item.id}</Text>
                    </View>
                    <Text style={{textAlign: 'center', color: '#098ee8', fontWeight: 'bold', fontSize: 18,fontFamily: 'SourceSansPro',}}>{doa.item.title}</Text>
                  </View>
                  <View>
                    <View style={{}}>
                      <View style={{justifyContent: 'flex-end'}}>
                        <Text style={s.arb}>{doa.item.arab}</Text>
                      </View>
                      <View style={{justifyContent: 'flex-start'}}>
                        <Text style={s.ltn}>{doa.item.latin}</Text>
                        <Text style={s.art}>Artinya: "{doa.item.arti}"</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </Content>
          )}
        />

        </Container>
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
      fontFamily: 'SourceSansPro',
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
    },
    id:{
        fontFamily: 'SourceSansPro',
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
        marginBottom: 15,
        color: '#4f4e4e',
        lineHeight: 50,
        fontFamily: 'Scheherazade',
    },
    ltn:{
      fontFamily: 'SourceSansPro',
      fontSize: 18,
      color: '#098ee8',
      marginVertical: 10,
      lineHeight: 25,
    },
    art:{
      fontFamily: 'SourceSansPro',
      fontSize: 18,
      marginTop: 10,
      textAlign: 'justify',
      color: '#4f4e4e',
      lineHeight: 25,
    },
    scrolldetail:{
      width: Dimensions.get('window').width,
      backgroundColor: '#e5e5e5',
    }
});