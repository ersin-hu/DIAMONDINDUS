
import {Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Feather} from '@expo/vector-icons'
import {Card} from 'react-native-elements';
import POIRoute from "./POIRoute";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//DATA DOORSTUREN

const POIinfo = ({navigation, route}) => {
    // const image = {uri: 'https://images.pexels.com/photos/1029243/pexels-photo-1029243.jpeg?cs=srgb&dl=pexels-suntorn-somtong-1029243.jpg&fm=jpg'};
    // const image = require(route.params.data[2].toString())
    const goBack = () => {
        navigation.goBack();
    }
    console.log(route.params.data[2])
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
    }, [navigation]);

    return (

        <View style={{backgroundColor: 'white', flex: 1}}>
            <ImageBackground
                source={route.params.data[2]}
                style={styles.image}
                imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
            >
                <Text style={styles.Tagline}>{route.params.data[0]}</Text>
                <Text style={styles.Placename}>Explore the Diamond</Text>

                <TouchableOpacity onPress={goBack} style={{position: 'absolute', left:20, top:40,
                backgroundColor: '#ff6200', padding: 10, borderRadius: 40}}>
                    <Feather name='arrow-left' size={24} color='#fff' />
                </TouchableOpacity>

                </ImageBackground>

                <ScrollView style={{backgroundColor: 'white'}}>
                    <Text style={{padding: 14, fontSize: 20, fontWeight: 'bold'}}>
                        About the place
                    </Text>
                    <Text style={{paddingHorizontal: 14, fontSize: 14, fontWeight: 'normal',
                    opacity: 0.7, justifyContent: 'flex-start', textAlign: 'justify', lineHeight: 20}}>
                        {route.params.data[1]}
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

export default POIinfo;