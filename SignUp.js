import React, { useState } from 'react';
import { SafeAreaView } from "react-navigation";
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import styles from './Appstyles';


export default function SignUp({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    
    const signUp = () => {
        setLoading(true);
        fetch('https://game-crud-api.herokuapp.com/api/v1/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        })
        .then((response) => response.json())
        .then((json) => {
            setLoading(false);
            if (json.token) {
            setToken(json.token);
            setLoggedIn(true);
            } else {
            setError(json.error);
            }
        }
        )
        .catch((error) => {
            setLoading(false);
            setError(error);
        }
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={(password) => setPassword(password)}
            />
            <Button title="Sign Up" onPress={signUp} />
            {loading && <Text>Loading...</Text>}
            {error && <Text>{error}</Text>}
            {loggedIn && <Text>Logged In!</Text>}
        </SafeAreaView>
    );
}