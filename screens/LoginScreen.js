import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, KeyboardAvoidingView  } from 'react-native'
import { Button, Input, Image} from 'react-native-elements'
import { StatusBar } from "expo-status-bar"
import {auth} from "../firebase"

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser);
            if(authUser) {
                navigation.replace("Home")
            }
        })
        
        return unsubscribe
        
    }, [])

    const signIn = () => {

    }

    return (
        <KeyboardAvoidingView behavior="padding" enabled style={styles.container} >
            <StatusBar style="light" />
            <Image 
            source={{
                uri:
                "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
            }}
            style={{ width: 200, height: 200}}
            />
            <View style={styles.inputContainer}>
                <Input 
                placeholder="Email" 
                autoFocus 
                type="email" 
                value={email} 
                onChangeText={(text) => setEmail((text))}
                />
                <Input 
                placeholder="Password" 
                secureTextEntry 
                type="password"
                value={password} 
                onChangeText={(text) => setPassword((text))}
                 />
            </View>

            <Button 
                title="Login" 
                onPress={signIn}
                containerStyle={styles.button}
             />
            <Button 
                onPress={() => navigation.navigate("Register")} 
                title="Register" 
                type="outline" 
                containerStyle={styles.button}
            />
            <View style={{ height: 100}} />
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,
    },
    inputContainer: {
        width: 300,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",

    }
})
