import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Platform, Text, View, StyleSheet, Dimensions, Button} from 'react-native';
import * as Location from 'expo-location';
import MapView, {Callout, Marker, Polyline} from "react-native-maps";
import {locations} from "./POIdata"
import {Image} from "react-native";
import POIRoute from "./POIRoute";



const POIinfo = ({ navigation }) => {

    return (

        <Text>Hoi</Text>
    );

}



export default POIinfo