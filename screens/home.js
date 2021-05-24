import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Image} from 'react-native';
import Card from '../shared/card';
import { AntDesign } from '@expo/vector-icons';
export default function Home({navigation}){
const [resto, setResto] = useState ([
{title: 'Jollibee' , id: '1', image: require('../assets/jollibee.png') },
{title: 'BurgerKing' , id: '2', image: require('../assets/burgerKing.jpg')},
{title: 'MCDo' , id: '3', image: require('../assets/mcDO.jpg')},
{title: 'Chowking' , id: '4',image: require('../assets/chowKing.png') },
{title: 'KFC' , id: '5', image: require('../assets/KFC.jpg')},
{title: 'Greenwich' , id: '6',image: require('../assets/greenWich.png') },
{title: 'Pizza Hut' , id: '7', image: require('../assets/PizzaHut.png') },
{title: 'Shakeys' , id: '8',image: require('../assets/shakeys.png') },
]);

    return(
        <View style={styles.container}> 
        <View style= {{marginLeft: 260}}>
        <AntDesign name="shoppingcart" size={40} color="red" onPress= {() => navigation.navigate('CheckOut',resto)} />
        </View>
        <FlatList
        numColumns={2}
        data={resto}
        renderItem={({item}) => (
            <TouchableOpacity onPress= {() => navigation.navigate(item.title , item)}>

             <Card>
                 <View style={{alignItems: 'center'}}>
                 <Image source= {item.image} style={{height: 90, width: 90 }}/>
                 <Text style={styles.item}>{item.title}</Text>
                 </View>
             </Card>
            </TouchableOpacity>
        )}
        />
        
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 30,
        alignItems: 'stretch'
    },
    item:{
        marginTop: 15,
        backgroundColor: 'white',
        fontSize: 20,
        alignItems: 'center',
        fontWeight: 'bold'
    }
})