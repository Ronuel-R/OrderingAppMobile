import React from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
const {width} = Dimensions.get("screen");
const cardWidth = width/2 - 40;

export default function Card(props) {
    return(
    <View style={styles.card}>
         <View style={styles.cardContent}>
             {props.children}
         </View>

    </View>
    )
}
const styles = StyleSheet.create({
    card:{
       height: 160,
       width: cardWidth,
       marginHorizontal:5,
       marginBottom: 10,
       marginTop: 25,
       elevation: 5,
       borderRadius: 25,
       
       backgroundColor: '#fff',
       
        
    },
    cardContent:{
      marginLeft: 5,
      marginTop:5,
      flexDirection: 'column'
       

    }
})