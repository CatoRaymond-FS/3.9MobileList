// create login page and handle login logic
import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


class Login extends Component {
    state = {
        email: '',
        password: '',
    };
    
    handleLogin = () => {
        const { email, password } = this.state;
        this.props.login(email, password);
    };
    
    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={(email) => this.setState({ email })}
            />
            <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(password) => this.setState({ password })}
            />
            <Button title="Login" onPress={this.handleLogin} />
        </View>
        );
    }
    }

