

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