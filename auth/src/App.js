import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { firebase } from 'firebase';
import { Header } from './Components/common';
import { LoginForm } from './Components/LoginForm';
import { Button, Card, CardSection, Input } from './Components/common';

class App extends Component {
  state = { text: '' }
  componentWillMount(){
//    firebase.initializeApp({
//      apiKey: 'AIzaSyBRye-9OAC0ig030jxgd6LSYnQK9Yq8JB8',
//      authDomain: 'auth-9b017.firebaseapp.com',
//      databaseURL: 'https://auth-9b017.firebaseio.com',
//      projectId: 'auth-9b017',
//      storageBucket: 'auth-9b017.appspot.com',
//      messagingSenderId: '128413880372'
//    }); 
  }
  render() {
    return (
      <View>
      <Header headerText='Authentication' />
      <Card>
                <CardSection>
                  <Input 
                  value={this.state.text}
                  onChangeText={text => this.setState({ text })}
                  />
                </CardSection>
                <CardSection></CardSection>
                <CardSection>
                    <Button> Login </Button>
                </CardSection>
            </Card>
      </View>
      )
  }
}

export default App; 
