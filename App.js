import 'react-native-gesture-handler';
import React from 'react';
import Tabs from './routes/bottomNavigator'
import firebase from "firebase/app"

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);;
}

export default () =>  <Tabs/>;



