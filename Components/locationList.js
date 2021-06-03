import React from "react";
import {ImageBackground, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Feather} from "@expo/vector-icons";

const locationList = ({ navigation }) => {
    return (

        <View style={{backgroundColor: 'white', flex: 1}}>
            <ImageBackground
                source={require("../assets/station.jpg")}
                style={styles.image}
                imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
            >
                <Text style={styles.Placename}>Locaties</Text>

                <TouchableOpacity style={{position: 'absolute', left:20, top:40,
                    backgroundColor: '#ff6200', padding: 10, borderRadius: 40}}>
                    <Feather name='arrow-left' size={24} color='#fff' />
                </TouchableOpacity>

            </ImageBackground>

            <ScrollView style={{backgroundColor: 'white'}}>
                <Text style={{padding: 14, fontSize: 20, fontWeight: 'bold'}}>
                    Informatie over deze locatie:
                </Text>
                <Text style={{paddingHorizontal: 14, fontSize: 14, fontWeight: 'normal',
                    opacity: 0.7, justifyContent: 'flex-start', textAlign: 'justify', lineHeight: 20}}>
                    sdfsdsddfsdfds
                </Text>
            </ScrollView>

        </View>

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
        }
    });



export default locationList