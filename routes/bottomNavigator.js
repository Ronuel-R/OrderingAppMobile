import * as React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Account from '../screens/account';
import ActivityLog from '../screens/activityLog';
import Notif from '../screens/notif';
import {HomeStackScreen} from './homeStack';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 5,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 50
        }
      }}>
        <Tab.Screen name="Home" component={HomeStackScreen} options= {{
   tabBarIcon:({focused}) => (
     <View style= {{alignItems:'center' ,justifyContent: 'center' , top: 5}}>
    <Image 
    source={require('../assets/HOME2.png')} 
    resizeMode= "contain"
    style={{
      width: 25,
      height: 25,
      tintColor: focused ? 'green' : '#748c94' 
    }}
    />
    <Text style={{color:focused ? 'green' : '#748c94', fontSize: 10}}>HOME</Text>
     
     </View>
   )
   }}/>
        <Tab.Screen name="Activity Log" component={ActivityLog} options= {{
          
   tabBarIcon:({focused}) => (
     
     <View style= {{alignItems:'center' ,justifyContent: 'center' , top: 5}}>
    <Image 
    source={require('../assets/ACTIVITY7.png')} 
    resizeMode= "contain"
    style={{
      width: 25,
      height: 25,
      tintColor: focused ? 'green' : '#748c94' 
    }}
    />
    <Text style={{color:focused ? 'green' : '#748c94', fontSize: 10}}>ACTIVITY</Text>
     
     </View>
   )
   }}/>
        <Tab.Screen name="Notifications" component={Notif} options= {{
   tabBarIcon:({focused}) => (
    <View style= {{alignItems:'center' ,justifyContent: 'center' , top: 5}}>
    <Image 
    source={require('../assets/NOTIF.png')} 
    resizeMode= "contain"
    style={{
    width: 25,
    height: 25,
    tintColor: focused ? 'green' : '#748c94' 
    }}
    />
    <Text style={{color:focused ? 'green' : '#748c94', fontSize: 10}}>NOTIFICATIONS</Text>
     </View>
   )
   }}/>
        <Tab.Screen name="Account" component={Account} options= {{
   tabBarIcon:({focused}) => (
     <View style= {{alignItems:'center' ,justifyContent: 'center' , top: 5}}>
    <Image 
    source={require('../assets/ACCOUNT9.png')} 
    resizeMode= "contain"
    style={{
      width: 25,
      height: 25,
      tintColor: focused ? 'green' : '#748c94' 
    }}
    />
    <Text style={{color:focused ? 'green' : '#748c94', fontSize: 10}}>ACCOUNT</Text>
     
     </View>
   )
   }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}