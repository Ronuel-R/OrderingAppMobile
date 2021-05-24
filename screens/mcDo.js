import React from 'react';
import { StyleSheet, View, Text ,Image, FlatList} from 'react-native';
import foodsMC from '../menu/mcMenu';
import Card from '../shared/card';
import {MaterialIcons} from '@expo/vector-icons';
export default function mcDo({ route, navigation }) {

    return(
        <View style={styles.container}>    
    <FlatList
    numColumns={2}
    data= {foodsMC}
    renderItem={({item}) => (
        <Card>
            <MaterialIcons
        name="add-shopping-cart"
        size={24}
        color= "green"
        style={styles.icon}
        />
        <View style={{alignItems: 'center'}}>
        <Image source= {item.image} style={{height: 75, width:75}}/>
        </View>

        <View styles={{alignItems: 'left'}}>  
      
        <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
        <Text style={{color: 'grey' , flexDirection: 'row'}}>{item.price}</Text>
        
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