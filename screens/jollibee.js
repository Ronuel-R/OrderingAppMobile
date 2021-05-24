import React,{useState} from 'react';
import { StyleSheet, View, Text ,Image, FlatList} from 'react-native';
import foodsJolli from '../menu/jolliMenu';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons';
import { saveOrder }  from '../utils/firebaseHelper';

export default function mcDo({ route, navigation , submitHandler}) {

    // const itemData={Name: name , Price: price};
    const handleOnPress = (name,price) => {

        console.log("recently pressed", name);
        console.log("recently pressed", price);
        navigation.navigate('CheckOut',name);
        itemData={Name:name, Price: price};
        // setName(name)
        // setPrice(price)
        saveOrder(itemData);
    }
    
    return(
        <View style={styles.container}>    
    <FlatList
    numColumns={2}
    data= {foodsJolli}
    renderItem={({item}) => (
        <Card>
            <MaterialIcons
        name="add-shopping-cart"
        size={24}
        color= "green"
        style={styles.icon}
        onPress= {() =>handleOnPress(item.name,item.price)}
        />
        <View style={{alignItems: 'center'}}>
        <Image source= {item.image} style={{height: 75, width:75}}/>
        </View>

        <View styles={{alignItems: 'left'}}>  
      
        <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
        <Text style={{color: 'grey' , flexDirection: 'row'}}>Price: php {item.price}</Text>
        
        </View>
        
        </Card>
    )}
        />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 30,
        alignItems: 'center',
        
    },
      icon: {
        flexDirection: 'row',
        marginLeft: 100,
    
    }

})