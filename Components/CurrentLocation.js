import React, {useState, useEffect} from 'react';
import {Platform, Text, View, StyleSheet, Dimensions} from 'react-native';
import * as Location from 'expo-location';
import MapView, {Callout, Marker} from "react-native-maps";
import POIscreen from "./POIscreen";

export default function App() {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [marginBottom, setMarginBottom] = useState(1)
    const [paddingTop, setPaddingTop] = useState(1)



    // const _handleMapRegionChange = function (mapRegion) {
    //     setLocation({ mapRegion });
    // };

    const _onMapReady = function() {
        setMarginBottom(0)
        setPaddingTop(0)
    }
    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            // console.log(location)
        })();
    }, []);

    let mapRegion = {
        latitude: 52.155499,
        longitude: 5.387740,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }


    let text = 'Waiting..';
    if (errorMsg) {
        console.log("location not found...");
    } else if (location) {
        text = JSON.stringify(location);
        mapRegion = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        };
    }

    return (

        <View style={styles.container}>

            <MapView
                style={{width: Dimensions.get("window").width,
                    height: Dimensions.get("window").height,
                    marginBottom: marginBottom}}
                onMapReady={_onMapReady}
                showsMyLocationButton ={true}
                showsCompass={true}
                showsUserLocation
                region={mapRegion}
                // onRegionChange={handleMapRegionChange}
            >
                <POIscreen/>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});