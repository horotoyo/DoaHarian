import React, { Component } from 'react';
import {Alert,Dimensions,FlatList,Clipboard,TouchableOpacity,View,ScrollView,StyleSheet,YellowBox,StatusBar} from 'react-native';
import {Header,Content,Title,Left,Right,Button,Body,Text,Container,Card,CardItem} from 'native-base';
import Icon from "react-native-vector-icons/MaterialIcons";
import DataDoa from '../data/DataDoa.json';
import {Menu, MenuOptions, MenuOption, MenuTrigger,} from 'react-native-popup-menu';

export default class Doa extends Component
{
   constructor(props) {
      super(props);
      const id = this.props.navigation.getParam('id');
      const index = id - 1;
   };

    id      = this.props.navigation.getParam('pageId');
    index   = parseInt(this.id) - 1;
    data    = DataDoa[this.index];

   handleScroll(event) {
      const id = event.nativeEvent.contentOffset.x / Dimensions.get('window').width + 1;
      null;
      this.props.navigation.setParams({
         hideOption: true,
         id: parseInt(id),
      });
   };

   cpAll = async (abc) => {
        const data    = DataDoa[abc - 1];
        const atext   = data.title + '\n \n' + data.arab + '\n \n' + data.latin + '\n \n' + data.arti;
        await Clipboard.setString(atext);
        Alert.alert(
            'Salin Doa',
            'Doa berhasil di salin',
        );
   };

   cpArb = async (abc) => {
        const data    = DataDoa[abc - 1];
        const atext   = data.arab;
        await Clipboard.setString(atext);
        Alert.alert(
            'Salin Arab',
            'Arab berhasil di salin',
        );
   };

   cpLtn = async (abc) => {
        const data    = DataDoa[abc - 1];
        const atext   = data.latin;
        await Clipboard.setString(atext);
        Alert.alert(
            'Salin Latin',
            'Latin berhasil di salin',
        );
   };

   cpArt = async (abc) => {
        const data    = DataDoa[abc - 1];
        const atext   = data.arti;
        await Clipboard.setString(atext);
        Alert.alert(
            'Salin Terjemahan',
            'Terjemahan berhasil di salin',
        );
   };

    render() {
      const {navigation}  = this.props;
      const index         = parseInt(this.id) - 1;
      const hal           = parseInt(this.id);
      const paramId       = navigation.getParam('id');

      return (
        <Container style={{width: Dimensions.get('window').width, backgroundColor: '#efefef'}}>
        <StatusBar hidden={false}/>
          <Header androidStatusBarColor="#013666" style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 80,
            backgroundColor: '#014f97',
          }}>

            <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
              <Icon name="arrow-back" size={20} style={{color: '#fff'}} />
            </TouchableOpacity>

            <View>
              <Text style={{
               color: '#fff',
               fontFamily: 'SourceSansPro',
               fontSize: 18,

              }}>
                Doa Harian Ke - { paramId ? paramId : hal }
              </Text>
            </View>

            <Menu>
              <MenuTrigger style={{
               padding: 6,
               borderRadius: 50,
              }}>
                <Icon name="more-vert" style={{color: '#fff',fontWeight: 'bold',fontSize: 20}} />
              </MenuTrigger>
              <MenuOptions>
                  <MenuOption onSelect={()=>this.cpAll(paramId)}>
                     <Text style={{
                        fontSize: 14,
                        fontFamily: 'SourceSansPro',
                        color: '#3f3f3f',
                        paddingVertical: 4,
                        paddingLeft: 3,
                     }}>
                        Salin Doa
                     </Text>
                  </MenuOption>
                  <MenuOption onSelect={()=>this.cpArb(paramId)}>
                     <Text style={{
                        fontSize: 14,
                        fontFamily: 'SourceSansPro',
                        color: '#3f3f3f',
                        paddingVertical: 4,
                        paddingLeft: 3,
                     }}>
                        Salin Arab
                     </Text>
                  </MenuOption>
                  <MenuOption onSelect={()=>this.cpLtn(paramId)}>
                     <Text style={{
                        fontSize: 14,
                        fontFamily: 'SourceSansPro',
                        color: '#3f3f3f',
                        paddingVertical: 4,
                     }}>
                        Salin Latin
                     </Text>
                  </MenuOption>
                  <MenuOption onSelect={()=>this.cpArt(paramId)}>
                     <Text style={{
                        fontSize: 14,
                        fontFamily: 'SourceSansPro',
                        color: '#3f3f3f',
                        paddingVertical: 4,
                        paddingLeft: 3,
                     }}>
                        Salin Terjemahan
                     </Text>
                  </MenuOption>
               </MenuOptions>
            </Menu>

          </Header>

          
            <FlatList
               style={{
                  
               }}
               data={DataDoa}
               keyExtractor={(doa, index)=>index.toString()}
               getItemLayout={(doa, index)=>(
                   {length: Dimensions.get('window').width,
                   offset: Dimensions.get('window').width * index,
                   index
                }
               )}
               initialScrollIndex={index}
               horizontal={true}
               pagingEnabled={true}
               showsHorizontalScrollIndicator={false}
               onMomentumScrollEnd={(event) => this.handleScroll(event)}
               renderItem={ (doa) => (
                  <ScrollView style={{
                     width: Dimensions.get('window').width,
                     padding: 8
                  }}>
                     <Card style={{
                        marginBottom: 20
                     }}>
                        <CardItem
                           header
                           style={{
                              flex: 1,
                              justifyContent: 'center',
                              alignItems: 'center'
                           }}>
                           <Text style={{
                              textAlign: 'center',
                              color: '#262626',
                              fontFamily: 'SourceSansPro',
                              fontWeight: 'bold'
                           }}>
                              {doa.item.title}
                           </Text>
                        </CardItem>
                        <CardItem>
                           <Body style={{
                              justifyContent: 'center',
                              alignItems: 'center',
                           }}>
                              <Text style={{
                                 color: '#3f3f3f',
                                 fontFamily: 'Scheherazade',
                                 fontSize: 33,
                                 marginBottom: 15
                              }}>
                                 {doa.item.arab}
                              </Text>
                              <Text style={{
                                 fontFamily: 'SourceSansPro',
                                 color: '#014f97',
                                 marginBottom: 15,
                                 lineHeight: 24,
                              }}>
                                 {doa.item.latin}
                              </Text>
                              <Text style={{
                                 fontFamily: 'SourceSansPro',
                                 color: '#3f3f3f',
                                 lineHeight: 24,
                                 marginBottom: 10,
                              }}>
                                 {doa.item.arti}
                              </Text>
                           </Body>
                        </CardItem>
                     </Card>
                   </ScrollView>
               )}
            />
          
        </Container>
      );
    }
}