import React, {Component} from 'react';

import { Text, View, ScrollView, TouchableOpacity, ImageBackground, FlatList, TouchableHighlight,StatusBar } from 'react-native';
import { Container,Header,Content } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import DaftarIsi from '../data/DaftarIsi.json';
import {Menu,MenuOptions,MenuOption,MenuTrigger,} from 'react-native-popup-menu';

export default class Utama extends Component {
  render() {
    return(
		<Container>
			<ScrollView style={{backgroundColor: '#efefef'}}>
          	<StatusBar hidden={false}/>
				<Header
					androidStatusBarColor="#013666"
					style={{
						backgroundColor: '#014f97',
						height: 200,
						position: 'absolute',
				}}>

					<ImageBackground
						source={require('../img/bgheader.png')}
						style={{
							width: '100%',
							height: '100%',
							flexDirection: 'column'
						}}
						imageStyle={{
							height: 170,
							width: 170,
							marginLeft: 290,
							marginTop: 12,
						}}
						>

						<View style={{
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center',
							width: '100%',
							paddingVertical: 20,
						}}>

							<Text style={{
								color: '#fff',
								fontFamily: 'SourceSansPro',
								fontSize: 16,
								fontWeight: 'bold',
							}}>
								Kumpulan Doa Sehari Hari
							</Text>

						</View>

						<View style={{
							justifyContent: 'center',
							alignItems: 'center',
							height: 40,
							marginBottom: 15,
						}}>
							<Text style={{
								color: '#fff',
								fontWeight: 'bold',
								fontSize: 35,
	        					fontFamily: 'Scheherazade',
							}}>
								الدعاء اليومية
							</Text>
						</View>

					 </ImageBackground>

				 </Header>

				<Content padder style={{
				 	position: 'relative',
				 	width: '100%',
				 	marginTop: 10
				}}>
				<Menu style={{
				 	borderRadius: 50,
				 	marginBottom: 120,
				 	justifyContent: 'flex-start',
				}}>
					<MenuTrigger style={{
						width: 25,
						height: 25,
						borderRadius: 50,
						justifyContent: 'center',
						alignItems: 'center',
					}}>
						<Icon name="more-vert" style={{color: '#fff', fontSize: 25}} />
					</MenuTrigger>
					<MenuOptions>
						<MenuOption onSelect={() => this.props.navigation.navigate('About')}>
							<Text style={{
		                        fontSize: 14,
		                        fontFamily: 'SourceSansPro',
		                        color: '#3f3f3f',
		                        paddingVertical: 4,
		                        paddingLeft: 3,
		                     }}>
								About
							</Text>
						</MenuOption>				   
					</MenuOptions>
				</Menu>

				 	<FlatList
			            data={DaftarIsi}
			            keyExtractor={(daftar, index) => index.toString()}
			            renderItem={ (daftar) => (
						 	<TouchableOpacity style={{
						 		borderRadius: 1,
						 		elevation: 1,
						 		borderLeftColor: '#014f97',
						 		borderLeftWidth: 4,
						 		backgroundColor: '#fff',
						 		marginBottom: 12,
						 		flexDirection: 'row',
						 		justifyContent: 'space-between',
						 		height: 50,
						 	}}
						 	onPress={()=>this.props.navigation.navigate('Doa',{pageId:daftar.item.id})}
						 	>

						 		<View style={{
						 			alignItems: 'center',
						 			justifyContent: 'flex-start',
						 			flexDirection: 'row',
						 		}}>

						 			<View style={{
						 				justifyContent: 'center',
						 				alignItems: 'center',
						 				width: 45,
						 			}}>
						 				<Text style={{
						 					fontSize: 20,
						 					color: '#3f3f3f',
						 					fontWeight: 'bold',
						 				}}>
						 					{daftar.item.id}
						 				</Text>
						 			</View>

						 			<View style={{
						 				flexDirection: 'column',
						 				justifyContent: 'center',
						 				paddingVertical: 4
						 			}}>
						 				<Text style={{
						 					fontSize: 15,
						 					color: '#3f3f3f',
						 					fontFamily: 'SourceSansPro',
						 				}}>
						 					{daftar.item.title}
						 				</Text>
						 				<Text style={{
						 					fontSize: 10,
						 					color: '#014f97',
						 					fontFamily: 'SourceSansPro',
						 				}}>
						 					Doa Harian ke - {daftar.item.id}
						 				</Text>
						 			</View>
						 		</View>

							 		<View style={{
							 			alignItems: 'center',
							 			justifyContent: 'center',
							 			marginRight: 5,
							 		}}>
							 			<Icon name="chevron-right" size={18} style={{color:'#bfbfbf'}} />
							 		</View>

						 	</TouchableOpacity>
			              
			            )}
			          />

				 </Content>
				 
			</ScrollView>		
		</Container>      
    );
  }
}