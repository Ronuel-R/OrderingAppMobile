import React from 'react';
import {Text,View,Image, StyleSheet,Button, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default class Counter extends React.Component{


    state={
        quantity:1
    }
    addQuantity = (quantity) => {
        this.setState({quantity: this.state.quantity + 1});
    }
    subtractQuantity = (quantity) => {
      if (this.state.quantity > 1) {
        this.setState({quantity: this.state.quantity - 1});
      }
    }

    render(){
        return (
        <View style={StyleSheet.container}>
            <View>
            <TouchableOpacity onPress= {() => this.addQuantity()}>
        <Ionicons
        name="add"
        size={24}
        color= "green"/>
        </TouchableOpacity>

        <Text style={{fontSize:20}}>Qty: {this.state.quantity}</Text>

        <TouchableOpacity onPress= {() => this.subtractQuantity()}>
        <Feather name="minus" size={24} color="green" />
        </TouchableOpacity>
            </View>
        </View>
        );
    }
}


const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})