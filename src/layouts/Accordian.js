import React, {Component} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import AppNavigator from '../router.js';

export default class Accordian extends Component{

  constructor(props) {
    super(props);
    this.state = { 
      data: props.data,
      expanded : false,
    }
  }

  render() {

    return (
       <View>
            <TouchableOpacity style={styles.buttonbab} onPress={()=>this.toggleExpand()}>
              <Icon name="spa" size={16} style={{color:'#727272'}} />
              <Text style={styles.bab1}>{this.props.title}</Text>
              <Icon name="spa" size={16} style={{color:'#727272'}} />
            </TouchableOpacity>

            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View>
                    <FlatList
                    data={this.state.data}
                    numColumns={1}
                    scrollEnabled={true}
                    keyExtractor={ (item, index) => index.toString()}
                    renderItem={({item, index}) => 
                        <View key={index} style={{backgroundColor: '#fff'}}>
                            <TouchableOpacity style={[styles.childRow, styles.button]}>
                                <Text style={styles.itemInActive}>{item.key}</Text>
                                <View style={styles.number}>
                                  <Text style={{color:'#fff'}}>{index+1}</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.childHr}/>
                        </View>
                    }
                    />
                </View>
            }
            
       </View>
    )
  }

  onClick=(index)=>{
    const temp = this.state.data.slice()
    temp[index].value = !temp[index].value
    this.setState({data: temp})
  }

  toggleExpand=()=>{
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    bab1: {
      fontWeight: 'bold',
      color: '#2b2b2b',
    },
    buttonbab: {
        backgroundColor: '#fff',
        width: '100%',
        height: 80,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 20,
    },
    button:{
        width:'100%',
        height:54,
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20,
        fontSize: 12,
    },
    title:{
        fontSize: 15,
        fontWeight:'bold',
        color: '#000',
    },
    itemActive:{
        fontSize: 15,
        color: 'blue',
    },
    itemInActive:{
        fontSize: 15,
        color: '#000',
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:20,
        paddingRight:20,
        alignItems:'center',
        backgroundColor: '#fff',
    },
    childRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: '#fff',
    },
    parentHr:{
        height:2,
        color: '#727272',
        width:'100%'
    },
    childHr:{
        height:1,
        backgroundColor: '#bfbfbf',
        width:'88%',
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
    },
    number: {
      backgroundColor: '#7a7a7a',
      height: 18,
      width: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
});