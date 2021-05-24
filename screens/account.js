
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { firebaseConfig } from '../firebase/config';
import firebase from "firebase";
import * as Facebook from 'expo-facebook';
import "firebase/auth";
import { retrieveAUser, saveAUser } from '../utils/firebaseHelper';
import Header from '../shared/headerAcc';
import { Zocial } from '@expo/vector-icons';
// import * as Google from 'expo-google-app-auth';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';



const FacebookSignin = ({ navigation }) => {
    const [loading, setLoading] = useState(false);

    const onFacebookSigninPress = async () => {
        setLoading(true);
        try {
            await Facebook.initializeAsync({
                appId: '2946186772373733',
            }); // enter your Facebook App Id 
            const { type,
                token, 
                expirationDate,
                permissions,
                declinedPermissions,
                } = await Facebook.logInWithReadPermissionsAsync({
                    permissions: ['public_profile', 'email'],
                });
            if (type === 'success') {   
                // SENDING THE TOKEN TO FIREBASE TO HANDLE AUTHyarn
                // const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
                // const facebookData = await response.json();
                // console.log("Facebook", facebookData);
                // Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);

                const credential = firebase.auth.FacebookAuthProvider.credential(token)
                firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                firebase.auth().signInWithCredential(credential)
                            .then(user => {
                                // All   the details about user are in here returned from firebase            
                                // console.log("fb signin", user);   
                                console.log("facebook login ", user, user.additionalUserInfo);
                                let userData = {
                                    provider: user.additionalUserInfo.providerId,
                                    family_name: user.additionalUserInfo.profile.last_name,
                                    given_name: user.additionalUserInfo.profile.first_name,
                                    displayName: user.additionalUserInfo.profile.name,
                                    email: user.additionalUserInfo.profile.email,
                                    lastLoginAt: new Date().toString(),
                                    photoURL: user.additionalUserInfo.profile.picture.data.url,
                                    uid: user.user.uid,

                                }
                                console.log("userdata", userData)
                                saveAUser(userData);
                                navigation.navigate("Restaurant");
                                // onLoginSuccess(userData);
                            })
                            .catch((error) => {
                                console.log('Error occurred ', error)
                                setLoading(false);
                            });
                    


            } else {
                // type === 'cancel'
                setLoading(false);
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    };



    const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
        {
          clientId: '967463254937-gdgk3abs3bc2vaepvqjko64qke97shec.apps.googleusercontent.com',
          },
      );
    
      React.useEffect(() => {
        if (response?.type === 'success') {
          const { id_token } = response.params;
          
          const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
          firebase.auth().signInWithCredential(credential)
          .then(user => {
              console.log("successful google signin, who is user", user, user.additionalUserInfo);
              let userData = {
                provider: user.additionalUserInfo.providerId,
                displayName: user.additionalUserInfo.profile.name,
                email: user.additionalUserInfo.profile.email,
                lastLoginAt: new Date().toString(),
                uid: user.user.uid,

            }
            console.log("userdata", userData)
            saveAUser(userData);
            navigation.navigate("Restaurant");
          });
        }
      }, [response]);
    
      
    
    

    return (
<View>
    <Header/>
        <View style={styles.container} >


<Text style= {styles.text}>Login using </Text>
<Entypo name="facebook" size={40} color="blue" onPress={onFacebookSigninPress}/>
<Text style= {styles.text}> or </Text>
<Zocial name="gmail" size={40} color="red" onPress={() => {promptAsync();}}/>


        </View></View>
    )

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        flexDirection: 'row'
    },
    text: {
        fontSize: 40,
        color: 'green'
    }

})




export default FacebookSignin;