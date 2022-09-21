import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState}  from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput} from 'react-native';
import {auth} from "../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { styles } from '../style';



export default function LoginScreen({navigation}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isSignedIn, setIsSignedIn] = React.useState(false)

  const signInUser = () =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((re) => {
      setIsSignedIn(true);
      navigation.navigate('UserCreation')
    })
    .catch((re) =>{
      alert(re);
    })
  }

  return (
    <SafeAreaView style = {styles.Container}>
      <StatusBar style="auto" />
      <View>
        <TextInput style = {styles.TextInput}
          placeholder = 'Email'
          onChangeText={(val) => setEmail(val)}
          autoCapitalize = 'none'
        />

        <TextInput style = {styles.TextInput}
          secureTextEntry = {true}
          placeholder = "Password"
          onChangeText = {(val) => setPassword(val)}
          autoCapitalize = 'none'
        />

        <Button
          color = "black"
          title = "Login"
          onPress={ () => signInUser()}
          style = {styles.Button}
        />

        <Button
          color = "black"
          title = "Register"
          onPress={ () => navigation.navigate('Register')}
          style = {styles.Button}
        />
      </View>
      
    </SafeAreaView>

  );
}


