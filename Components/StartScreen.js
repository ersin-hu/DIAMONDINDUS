import React, {useState} from 'react'
import {SafeAreaView, Text, StyleSheet, TextInput, Pressable, Image, View} from "react-native";

export default function StartScreen({navigation: {navigate}}) {
    const [inputName, setInputName] = useState(null);
    const [inputAge, setInputAge] = useState(null);


    const onStartPress = function () {

        if (inputName === null) {
            alert("Vul je naam in")
        }
        if (inputName.length < 3) {
            alert("Je naam moet minimaal 3 karakters lang zijn")
        }
        if ((inputAge > 110 || inputAge < 1) && inputAge != null) {
            alert("Voer een geldige leeftijd in")
        }
        if (inputAge === null) {
            alert("Voer je leeftijd in")
        }
        if (inputName.length > 2 && inputAge < 110 && inputAge > 0 && inputAge != null) {
            navigate('Map')
        }
        console.log("input name: " + inputName)
        console.log("input age: " + inputAge)
    }

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.Text}>Welkom bij de <Text style={styles.boldText}>Hilversum History Hunt</Text>. Vandaag
                zullen jullie van alles leren over de diamant-geschiedenis van Hilversum.
                Vul je gegevens in en ga van start met het spel!</Text>
            <SafeAreaView style={styles.textInputContainer}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Gebruikersnaam"
                    onChangeText={text => setInputName(text)}
                    maxLength={25}
                >
                </TextInput>
            </SafeAreaView>
            <SafeAreaView style={styles.textInputContainer}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Leeftijd"
                    onChangeText={text => setInputAge(text)}
                    maxLength={3}
                    numeric
                    keyboardType={'numeric'}

                >
                </TextInput>
            </SafeAreaView>

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
    ImageContainer: {
        flexDirection: 'row'
    },
    boldText: {
        fontWeight: 'bold'
    },
    Text: {
        fontSize: 30,
    },
    TextInput: {
        paddingVertical: 5,
        paddingHorizontal: 30,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 30,

    },
    textInputContainer: {
        paddingTop: 20,
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