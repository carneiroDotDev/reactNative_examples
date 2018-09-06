import React, { Component } from 'react';
import { Button, Card, CardSection } from './common';
import { View } from 'react-native';

class LoginForm extends Component {
    render(){
        return (
            <Card>
                <CardSection></CardSection>
                <CardSection></CardSection>
                <CardSection>
                    <Button> Login </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm