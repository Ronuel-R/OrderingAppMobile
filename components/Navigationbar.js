import React from 'react';
import {StyleSheet, Text, View, Modal} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


export default function Navigation(){
//const [modalOpen, setModalOpen] = useState(false);
return(
<View styles={styles.container}>

<View style={styles.icon}> 
<MaterialCommunityIcons name="home-outline" size={35} color="black" />
</View>
<View style={styles.icon}>
<FontAwesome name="list-alt" size={30} color="black"/>
</View>

</View>
)
}
const styles=StyleSheet.create({
container:{

},
    icon: {
    padding: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    marginTop: 16,
    marginLeft: 20,
    borderRadius: 10,

    }
})