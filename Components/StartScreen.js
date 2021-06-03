import React, {useState} from 'react'
import {SafeAreaView, Text, StyleSheet, TextInput, Pressable} from "react-native";
import {createStackNavigator} from '@react-navigation/stack';

export default function StartScreen({navigation: {navigate}}) {
    const [inputName, setInputName] = useState(null);


    const Stack = createStackNavigator();

    const onStartPress = function () {
        navigate('Map')
        console.log("input name: " + inputName)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.Text}>Welkom bij de <Text style={styles.boldText}>Hilversum History Hunt</Text>. Vandaag
                zullen jullie van alles leren over de diamant-geschiedenis van Hilversum.
                Vul je gegevens in en ga van start met het spel!</Text>
            <TextInput
                style={styles.TextInput}
                placeholder="Naam deelnemer"
                onChangeText={text => setInputName(text)}
                maxLength={25}
            >
            </TextInput>
            <Pressable style={styles.StartButton} onPress={() => onStartPress()}>
                <Text style={styles.ButtonText}>Start!</Text>
            </Pressable>
        </SafeAreaView>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 30,
        padding: 20,
        alignItems: "center",

    },
    boldText: {
        fontWeight: 'bold'
    },
    Text: {
        fontSize: 30,
    },
    TextInput: {
        paddingVertical: 5,
        paddingHorizontal: 50,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 30
    },
    ButtonText: {
        fontSize: 20,
        textAlign: 'center',
    },
    StartButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 50,
        borderRadius: 30,
        elevation: 3,
        backgroundColor: 'white',
        zIndex: 2,
        position: 'absolute',
        bottom: 100,
        borderColor: "green",
        borderWidth: 3
    }
});