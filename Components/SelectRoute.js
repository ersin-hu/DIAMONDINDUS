
import {Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Card} from 'react-native-elements';
import POIRoute from "./POIRoute";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


export default function SelectRoute({nagivation}) {
    const onRouteClick = function() {
        // return (<POIRoute/>);
        console.log("Route start maken")
    }
    return (

        <View style={styles.centeredView} >
            <TouchableOpacity>
                <Card style={styles.cardBoxRoute} borderRadius={10} borderColor="green">
                    <Text style={{textAlign: 'center'}}>!TEST! Nog doen</Text>
                    <Text style={{textAlign: 'center'}}>DiamantRoute</Text>
                    <Text style={{textAlign: 'center'}}>Duur van de route: 1 uur 6 min</Text>
                </Card>
            </TouchableOpacity>
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

    cardBoxRoute: {
        bottom: 0,


    },
    //
    // cardBoxRouteStart: {
    //     backgroundColor: 'blue',
    //     fontSize: 100,
    //     textAlign: 'center',
    // }
});
