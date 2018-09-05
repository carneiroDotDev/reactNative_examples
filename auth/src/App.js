import React, {Component} from 'react';
import { Text, View} from 'react-native';
import { firebase } from 'firebase';
import { Header } from './Components/common';

class App extends Component {
  componentWillMount(){
    firebase.initializeApp({
      {
        apiKey: "AIzaSyBRye-9OAC0ig030jxgd6LSYnQK9Yq8JB8",
        authDomain: "auth-9b017.firebaseapp.com",
        databaseURL: "https://auth-9b017.firebaseio.com",
        projectId: "auth-9b017",
        storageBucket: "auth-9b017.appspot.com",
        messagingSenderId: "128413880372"
      }
    }); 
  }
  render(){
    return (<View>
      <Header headerText='Authentication' />
      <Text> App </Text></View>)
  }
}

export default App; 
