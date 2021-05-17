import React, {useState, useEffect} from 'react';
import {Platform, Text, View, StyleSheet, Dimensions} from 'react-native';
import * as Location from 'expo-location';
import MapView, {Callout, Marker, Polyline} from "react-native-maps";
import {locations} from "./POIdata"
import {Image} from "react-native";

const POIRoute = () => {
    return (
        locations.map(marker => (
            <Polyline key={ Math.random().toString(36).substr(2, 9) }
                coordinates={locations}
                strokeColor="#000"
                strokeColors={['#7F0000']}
                strokeWidth={6}
            />
        ))
    );
};
export default POIRoute