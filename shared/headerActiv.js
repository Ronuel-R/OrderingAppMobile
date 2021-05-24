import React from 'react';
import { StyleSheet, View, Text ,Image, FlatList} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';


export default function Header () {
    return (
        <View style={StyleSheet.header}>
           
            <Text style={styles.headerText}>Activity</Text>

        </View>
    );
    
}
const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
       
        
    },
    headerText: {
        fontWeight: 'bold',
        fontSize:20,
        color: 'green',
        letterSpacing: 1,
        textAlign: 'center',
        textAlignVertical: 'center' ,
        height: 90,
        backgroundColor: 'white',
        elevation: 20
        
    }
})