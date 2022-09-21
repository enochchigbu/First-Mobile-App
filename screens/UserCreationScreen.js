import { StatusBar } from 'expo-status-bar';
import React, {useState}  from 'react';
import {Text, View, SafeAreaView, Button, TextInput} from 'react-native';
import { styles } from '../style';

export default function UserCreationScreen({navigation}) {
  
    return(
      <SafeAreaView style = {styles.Container}>
        <StatusBar style = 'auto'/>
        <View>
            <TextInput 
                style = {styles.TextInput}
                placeholder = "Username"
            />
        </View>
        
        
      </SafeAreaView>
    )
  };