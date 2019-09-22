import React, { Component } from 'react';
import {Dimensions,TouchableOpacity,View,ScrollView,StyleSheet,StatusBar,Image,YellowBox,ImageBackground} from 'react-native';
import {Header,Content,Title,Left,Right,Button,Body,Text,Container,Card} from 'native-base';
import Icon from "react-native-vector-icons/MaterialIcons";

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillUpdate is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
]);

export default class About extends Component
{
  render() {
    return (
      <Container style={{backgroundColor: '#e5e5e5'}}>

       <StatusBar hidden={false}/>
        <Header style={s.header} androidStatusBarColor="#013666">
          <Left>
          <TouchableOpacity>
            <Button transparent onPress={()=>this.props.navigation.goBack()}>
              <Icon name="arrow-back" size={25} style={{color: '#fff'}}/>
            </Button>
          </TouchableOpacity>
          </Left>
          <Body style={{
            marginLeft: 74
          }}>
            <Title style={{
              fontWeight: 'bold',
              fontFamily: 'SourceSansPro',
              fontSize: 20
            }}>
              About
            </Title>
          </Body>
        </Header>

        <Content>
          <ScrollView
            style={{flex:1,
              backgroundColor: '#fff',
              margin: 15
            }}>
            <ImageBackground
            source={require('../img/bgabout.png')}
            style={{
              padding: 15,
              width: '100%',
              height: '100%',
            }}
            imageStyle={{
              height: 250,
              width: 250,
              marginLeft: 200,
              marginTop: 500,
            }}>
            <View style={{
              alignItems: 'center',
              marginVertical: 15
            }}>
              <Image source={require('../img/icon-wshad.png')} style={{width: 140, height: 140}} />
              <Text style={{
                fontSize: 20,
                fontFamily: 'SourceSansPro',
                fontWeight: 'bold',
                marginTop: 3,
                color: '#3d3d3d'
              }}>
                KUMPULAN DOA SEHARI HARI
              </Text>
              <Text style={{
                fontSize: 14,
                fontFamily: 'SourceSansPro',
                color: '#515151'
              }}>
                by Suryo Widiyanto Gumelar
              </Text>
            </View>

            <View style={{marginVertical: 20}}>
              <Text style={s.font}>Aplikasi ini bertujuan untuk mempermudah menghafal doa doa sehari hari terutama bagi anak anak, dan harapannya bisa diamalkan dalam kesehariannya.</Text>
              <Text style={s.font}>Project ini merupakan hasil pembelajaran mobile application dari santri jurusan programming di Pondok Informatika Al Madinah. Dikerjakan dengan basis React Native selama 1 bulan.</Text>
              <Text style={s.font}>Semoga aplikasi ini dapat memberikan banyak manfaat bagi para penggunanya. Tentunya dalam pengembangan aplikasi ini masih banyak kekurangan oleh karena itu, masukan dan kritikan dari para pengguna sangat kami harapkan.</Text>
            </View>

            <View>
              <Text style={{
                fontWeight: 'bold',
                fontFamily: 'SourceSansPro',
                color: '#3d3d3d',
                marginBottom: 5
              }}>
                Developer
              </Text>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center'
              }}>
                <Icon name="keyboard-arrow-right" size={15} color="#515151" />
                <Text style={{
                  color: '#515151',
                  fontSize: 13
                }}>
                  Suryo Widiyanto Gumelar
                </Text>
              </View>
            </View>

            <View style={{
              marginTop: 20
            }}>
              <Text style={{
                fontWeight: 'bold',
                fontFamily: 'SourceSansPro',
                color: '#3d3d3d',
                marginBottom: 5
              }}>
                Pondok Informatika Al Madinah
              </Text>
              <View style={s.boxmedsos}>
                <Icon name="mail" size={15} color="#515151" style={{marginRight: 8}} />
                <Text style={s.medsos}>pondokitalmadinah@gmail.com</Text>
              </View>
              <View style={s.boxmedsos}>
                <Icon name="public" size={15} color="#515151" style={{marginRight: 8}} />
                <Text style={s.medsos}>http://pondokinformatika.com</Text>
              </View>
              <View style={s.boxmedsos}>
                <Icon name="phone-android" size={15} color="#515151" style={{marginRight: 8}} />
                <Text style={s.medsos}>0857 2524 9265 (Irhamullah)</Text>
              </View>
              <View style={s.boxmedsos}>
                <Icon name="home" size={15} color="#515151" style={{marginRight: 8}} />
                <Text style={s.medsos}>Jl. Raya Krapyak RT.05, Karanganyar, Wedomartani, Ngemplak, Sleman, Daerah Istimewa Yogyakarta</Text>
              </View>
            </View>

            <View style={{
              alignItems: 'center',
              marginTop: 30,
              marginBottom: 15,
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
              <Image source={require('../img/logo-pondok.png')} style={{height: 40, width: 40, resizeMode: 'center'}} />
              <View style={{marginRight: 5, marginTop: 4}}>
                <Text style={{color: '#104451', fontSize: 10,}}>PONDOK INFORMATIKA</Text>
                <Text style={{color: '#104451', fontSize: 10,}}>AL MADINAH</Text>
              </View>
            </View>

          </ImageBackground>
          </ScrollView>
        </Content>

        </Container>
      );
    }
}

const s = StyleSheet.create({
  header: {
    backgroundColor: '#014f97',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  font:{
    fontFamily: 'SourceSansPro',
    color: '#515151',
    marginBottom: 10,
    textAlign: 'justify',
    fontSize: 15,
  },
  boxmedsos: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  medsos: {
    marginBottom: 5,
    color: '#515151',
    fontSize: 13,
  },
});