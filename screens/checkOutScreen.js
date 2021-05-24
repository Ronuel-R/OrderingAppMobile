import React, { useState } from 'react';
import {Text,View,Image, StyleSheet,Button, TouchableOpacity, Dimensions} from 'react-native';
import Card from '../shared/card1';
import {MaterialIcons} from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Counter from '../shared/counter';
const {width} = Dimensions.get("screen");
const cardWidth = width - 15;

export default ({route, navigation}) => { 
const {itemName, itemPrice, itemImage} = route.params;
 

// const tPrice = Qty * itemPrice;

    return(

        <View style={styles.content}> 
        
        <Image source= {itemImage} style={{height: 100, width: 100, marginTop: 15}}/>
        
        <View style={{}}>
        <Text style={{marginBottom: 20, marginTop: 20}}>Item Name:</Text>
        <Text style={{marginBottom: 20}}>{JSON.stringify(itemName)}</Text>
        <Text style= {{color: 'grey', }}>Price: {JSON.stringify(itemPrice)}</Text>
        </View>
        <View style={{marginTop: 35, marginLeft: 45, }}>
        <Counter/>
        {/* <Text>Price: P{tPrice}</Text>  */}
        </View>
       
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        height: 140,
        width: cardWidth,
        marginHorizontal:5,
        marginVertical:20,
        marginHorizontal: 8,
        elevation: 25,
        borderRadius: 10,
        backgroundColor: 'white',
        flexDirection: 'row'

    },
   
    
})