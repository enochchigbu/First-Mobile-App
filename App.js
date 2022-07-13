import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style = {styles.logInContainer}>
      <StatusBar style="auto" />
      <View>
        <TextInput style = {styles.logInTextInput}
          placeholder = "Username"
        />

        <TextInput style = {styles.logInTextInput}
          secureTextEntry = {true}
          placeholder = "Password"
        />

        <Button
          color = "black"
          title = "Login"
          onPress={ () => console.log("pressed")}
          style = {styles.logInButton}
        />
      </View>
      
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  logInButton: {
    borderRadius: 10
  },
  logInTextInput:{
    height: 50,
    width : 300,
    borderWidth: 1,
    padding: 10,
    margin: 10,
    fontSize: 20,

  },
  logInContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign : 'center',
    
  }
});
