import React from "react";
import {
    Image,
    ImageBackground,
    Platform, Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {Feather} from "@expo/vector-icons";
import {locations} from "./POIdata";
import {Marker} from "react-native-maps";
import POIRoute from "./POIRoute";

const locationList = ({navigation: {navigate}}) => {
    const goBack = () => {
        navigate.goBack();
    }
    return (

        <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
            <ScrollView style={{backgroundColor: 'white'}}>
                <Text style={{padding: 14, fontSize: 20, fontWeight: 'bold'}}>
                    Overzicht locaties
                </Text>
                <Text style={{
                    paddingHorizontal: 14, fontSize: 14, fontWeight: 'normal',
                    opacity: 0.7, justifyContent: 'flex-start', textAlign: 'justify', lineHeight: 20
                }}>
                    Hieronder vind je bij elke locatie de bijbehorende vraag. Ook kunt je jouw gegeven antwoorden inzien
                    en wijzigen.
                </Text>
                {locations.map(locatie => (
                    <SafeAreaView key={Math.random().toString(36).substr(2, 9)}>

                        <View >
                            <Image style={{width: 30, height: 30, alignItems: "center"}}
                                   source={require('../assets/Beschikbaar-01.png')} onPress={() => navigate('POIinfo', {data: [locatie.title, locatie.description, locatie.image]})}/>
                            <Text onPress={() => navigate('POIinfo', {data: [locatie.title, locatie.description, locatie.image]})}>{locatie.title}</Text>
                            <Text onPress={() => navigate('POIinfo', {data: [locatie.title, locatie.description, locatie.image]})}>{" " + locatie.adres}</Text>
                            <Image style={{width: 30, height: 30, alignItems: "center"}}
                                   source={locatie.image} onPress={() => navigate('POIinfo', {data: [locatie.title, locatie.description, locatie.image]})}/>
                            <Pressable style={styles.StartButton} onPress={() => console.log("link nog maken")}>
                                <Text style={styles.ButtonText}>Toon vraag</Text>
                            </Pressable>
                            <Pressable style={styles.StartButton} onPress={() => console.log("link nog maken")}>
                                <Text style={styles.ButtonText}>Toon antwoord</Text>
                            </Pressable>
                            <Pressable style={styles.StartButton} onPress={() => console.log("link nog maken")}>
                                <Text style={styles.ButtonText}>Wijzig antwoord</Text>
                            </Pressable>
                        </View>


                    </SafeAreaView>

                ))}
            </ScrollView>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // zIndex: 2
    },
    image: {
        height: 380,
        justifyContent: 'flex-end',
    },
    Tagline: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 14,
    },
    Placename: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 14,
        marginBottom: 30
    },
    ButtonText: {
        fontSize: 20,
        textAlign: 'center',
    },
    StartButton: {

        alignItems: 'center',
        justifyContent: 'center',
        // paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 30,
        // elevation: 3,
        backgroundColor: 'white',
        // paddingTop: 5,
        // zIndex: 2,
        // position: 'absolute',
        // bottom: 100,
        borderColor: "green",
        borderWidth: 3
    }
});


export default locationList