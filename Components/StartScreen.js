import React, {useState} from 'react'
import {SafeAreaView, Text, StyleSheet, TextInput, Pressable, Image, View} from "react-native";

export default function StartScreen({navigation: {navigate}}) {
    const [inputName, setInputName] = useState(null);
    const [inputAge, setInputAge] = useState(null);


    const onStartPress = function () {

        if (inputName === null) {
            alert("Vul je naam in")
            return;
        }
        if (inputName.length < 3) {
            alert("Je naam moet minimaal 3 karakters lang zijn")
            return;
        }
        if ((inputAge > 110 || inputAge < 1) && inputAge != null) {
            alert("Voer een geldige leeftijd in")
            return;
        }
        if (inputAge === null) {
            alert("Voer je leeftijd in")
            return;
        }
        if (inputName.length > 2 && inputAge < 110 && inputAge > 0 && inputAge != null) {
            // navigate('Map')

                let requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };
                let callResult = "false";

                //todo fix infinite loop Created by Roy, Ersin possibly knows a fix
                fetch("http://81.169.131.185:8080/api/user?username=" + inputName + "&age=" + inputAge, requestOptions)
                    .then(response => response.text())
                    .then((result) => {
                        console.log(result)
                        callResult = result.toString();
                        console.log(callResult)
                        if (callResult === "true") {
                            navigate('Map')
                        }
                    })
                    .catch(error => console.log('error', error));

                if (callResult === "true") {
                    navigate('Map')
                } else {

                    let postRequestOptions = {
                        method: 'POST',
                        redirect: 'follow'
                    };
                    //todo fix infinite loop Created by Roy, Ersin possibly knows a fix
                    fetch("http://81.169.131.185:8080/api/user?username=" + inputName + "&age=" + inputAge, postRequestOptions)
                        .then(response => response.text())
                        .then(result => console.log(result))
                        .catch(error => console.log('error', error));
                    console.log("Account created")
                }
            alert("Voordat je kunt beginnen aan de Hilversum HistoryHunt. Moet je natuurlijk weten hoe het spel begint. De Hilversum History Hunt is een soort vossenjacht. De bedoeling is dat je de route volgt opweg naar een diamant. Eenmaal bij een diamant aangekomen, kun je kans maken op prijzen. Om te beginnen druk op OK.")
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