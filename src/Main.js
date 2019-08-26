import React, { Component } from 'react';
import {StatusBar,Text,Image,FlatList,TouchableOpacity,TouchableHighlight,ScrollView,Dimensions,Animated,View,StyleSheet} from 'react-native';
import {Container,Header} from 'native-base';
import Icon from "react-native-vector-icons/MaterialIcons";
import DaftarIsi from './data/DaftarIsi.json';

export default class Main extends Component
{
  render() {
    const {navigation}  = this.props;
    return (
      <Container>
        
        <Header style={s.header} androidStatusBarColor="#0173bf">
          <Icon name="spa" size={18} style={{color:"#fff"}} />
          <Text style={s.headertitle}>Kumpulan Doa Sehari Hari</Text>
          <Icon name="spa" size={18} style={{color:"#fff"}} />
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
                  onPress={()=>this.props.navigation.navigate('Ayat',{pageId:daftar.item.id})}
                >
                  <View style={s.id}>
                    <Text style={{fontSize: 18,textAlign: 'center',color: '#098ee8', fontWeight: 'bold'}}>{daftar.item.id}</Text>
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
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      justifyContent: 'space-around',
    },
    headertitle: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20,
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
        marginTop: 8,
        marginBottom: 5,
        paddingVertical: 5,
        backgroundColor: '#fff',
    },
    id:{
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#098ee8',
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 50,
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
});