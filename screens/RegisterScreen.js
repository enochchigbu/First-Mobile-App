import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react';
import { Text, View, SafeAreaView, Button, TextInput} from 'react-native';
import {auth} from "../firebase"
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { styles } from '../style';

export default function RegisterScreen({navigation}) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');


  const registerUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((re) => {
      console.log(re)
    })
    .catch((re) =>{
      console.log(re)
    })
  }

  const handleConfirmPassword = () =>{
    if(confirmPassword !== password){
      alert("Passwords are not similar");
    }
    else{
      registerUser()
      navigation.navigate('Login')
    }
  }

  return (
    <SafeAreaView style = {styles.Container}>
      <StatusBar style="auto" />
      <View>

      <TextInput style = {styles.TextInput}
          placeholder = "Email"
          onChangeText = {(val) => setEmail(val)}
          autoCapitalize = 'none'
        />

        <TextInput style = {styles.TextInput}
          secureTextEntry = {true}
          placeholder = "Password"
          onChangeText = {(val) => setPassword(val)}
          autoCapitalize = 'none'
        />

        <TextInput style = {styles.TextInput}
          secureTextEntry = {true}
          placeholder = "Confirm Password"
          onChangeText = {(val) => setConfirmPassword(val)}
          autoCapitalize = 'none'
        />
        <Button
          color = "black"
          title = "Create Account"
          onPress={ () => handleConfirmPassword()}
          style = {styles.logInButton}
        />
      </View>
      
    </SafeAreaView>

  );
}

